var mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

    nome: {
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    senha:{
        type:String,
        required:true
    },

    tipo:{
        type:String,
        default:"coroinha"
    }

})

module.exports = mongoose.model("Usuario", usuarioSchema);