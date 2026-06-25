const Coroinha = require('../models/coroinha'); 

async function exibir() {

    try {
        const coroinhas = await Coroinha.find()

        return coroinhas

    }
    catch (error) {
        console.log(error)
        return [];
    }
}

async function adicionar(doc) {
    try {

        const novoCoroinha = new Coroinha(doc);

        const salvo = await novoCoroinha.save();

        return salvo;
    }
    catch (error) {
        console.log(error)
        return [];
    }
}

module.exports = { exibir, adicionar }