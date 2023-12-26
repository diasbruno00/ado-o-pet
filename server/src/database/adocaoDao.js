import mongoose  from 'mongoose'
import { Schema } from "mongoose"

const AdocaoDao = new Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    informacoes: {
        type: String
    },
    status:{
        type: String
    }

});

export default  mongoose.model("Adocao", AdocaoDao);
