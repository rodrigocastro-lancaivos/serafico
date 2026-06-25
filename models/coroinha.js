const mongoose = require('mongoose');


const CoroinhaSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },


    dataNascimento: {
        type: Date,
        required: true
    },


    telefone: {
        type: String
    },


    responsavel: {
        type: String
    },


    emailResponsavel: {
        type: String
    },


    endereco: {
        type: String
    },


    foto: {
        type: String,
        default: "sem-foto.png"
    },


    status: {
        type: String,
        default: "ativo"
    },


    nivel: {
        type: String,
        default: "Novato"
    },


    dataEntrada: {
        type: Date,
        default: Date.now
    },


    observacoes: {
        type: String
    }

});


module.exports = mongoose.model(
    "Coroinha",
    CoroinhaSchema
);