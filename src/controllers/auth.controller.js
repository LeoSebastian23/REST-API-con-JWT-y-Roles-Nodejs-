import User from '../models/User.model'
import jwt from 'jsonwebtoken'
import config from "../config/config";
import Rols from "../models/roles";

export const signUp = async (req,res) => {
    const {username,email,password,roles} = req.body
    
    const newUser = new User({
        username,
        email, 
        password : await User.encryptPassword(password)
    })

    if(roles){
        const foundRoles = await Rols.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Rols.findOne({name: "user"})
        newUser.roles = [role._id]
    }
    
    const saveUser = await newUser.save()
    console.log(saveUser)

    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn: 86400 // 24hs
    })
    res.status(200).json({token})
}

export const signIn = async (req,res) => {
    res.json('signIn')
}