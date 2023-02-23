import {Schema, model} from 'mongoose'

const RolSchema = new Schema({
    nameRol:{
        type: String,
        unique: true
    },
    versionKey: false
})

export default model("Rols",RolSchema)