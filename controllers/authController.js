// authController.js
const Usuario = require('../models/Usuario'); 
const bcrypt = require('bcrypt');

async function logar(req, res) {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ email: email });

        if (!usuario) {
            return res.status(404).send("Usuário não encontrado");
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).send("Senha incorreta");
        }
        
        res.redirect("/home");

    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).send("Erro interno do servidor");
    }
}

async function registrar(req, res) {
    const { nome, email, senha, confirmarSenha } = req.body;

    try {
        if (senha !== confirmarSenha) {
            return res.status(400).send("As senhas não são iguais");
        }

        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).send("Email já cadastrado");
        }

        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        const novoUsuario = new Usuario({
            nome,
            email,
            senha: senhaHash,
            tipo: "coroinha" // opcional, o Schema já tem default
        });

        await novoUsuario.save();

        res.status(201).redirect("/"); // Redireciona para o login

    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).send("Erro ao criar usuário");
    }
}

module.exports = {
    logar,
    registrar
};