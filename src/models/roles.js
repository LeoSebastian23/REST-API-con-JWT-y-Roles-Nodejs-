import {Schema, model} from 'mongoose'

const RolSchema = new Schema({
    name:{
        type: String,
        unique: true
    },
    versionKey: false
})

export default model("Rols",RolSchema)