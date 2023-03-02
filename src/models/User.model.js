import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username:{
        type: String,
        unique: true
    },
    email:{
        type: String,
    },
    password:{
        type: String,
        unique: true
    },
    roles:[{
        ref:"Rols",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey: false
})

// Funcion estatica para cifrar contraseñas
userSchema.statics.encryptPassword = async (password) => { // El usuario me da una contraseña 
    const salt = await bcrypt.genSalt(10) // Utilizo el metodo bcrypt para tomar esa contraseña 
    return await bcrypt.hash(password,salt) // Devuelve un texto cifrado
}

// Funcion estatica para comparar que la contraseña ingresada no exista
userSchema.statics.comparePassword = async (password, receivedPassword) =>{
    await bcrypt.compare(password,receivedPassword)
}

export default model('User', userSchema)