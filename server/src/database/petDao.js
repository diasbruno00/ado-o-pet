import mongoose  from 'mongoose'
import { Schema } from "mongoose"

const PetDao = new Schema({
    nome: {
      type: String
    },
    idade: {
      type: Number
    },
    sexo: {
      type: String
    },
    tipo:{
      type: String
    },
    raca: {
      type: String
    },
    estado: {
      type: String
    }, 
    cidade:{
      type: String
    },
    imagem:{
      type: String
    },
    status: {
      type: String
    }
    
   
});

export default  mongoose.model("Pet", PetDao);
