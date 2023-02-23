import User from '../models/User.model'

export const signUp = async (req,res) => {
    const {username,email,password,roles} = req.body
    
    const newUser = new User({
        username,
        email, 
        password//: User.encryptPassword(password)
    })
    console.log(newUser) 
    res.json('signUp')
}

export const signIn = async (req,res) => {
    res.json('signIn')
}