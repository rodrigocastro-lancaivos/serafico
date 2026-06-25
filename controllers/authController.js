const Usuario = require('../models/Usuario'); 
const bcrypt = require('bcrypt');

async function logar(req, res) {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ email: email });

        if (!usuario) {
            return res.status(404).send(`
                <script>
                    alert("Usuário não encontrado")
                    window.history.back();
                </script>
                `);
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).send(`
                <script>
                    alert("Senha incorreta")
                    window.history.back();
                </script>
                `);
        }
        
        res.redirect("/home");

    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).send(`
                <script>
                    alert("Erro do servidor")
                    window.history.back();
                </script>
                `);
    }
}

async function registrar(req, res) {
    const { nome, email, senha, confirmarSenha } = req.body;

    try {
        if (senha !== confirmarSenha) {
            return res.status(400).send(`
                <script>
                    alert("As senhas não são iguais")
                    window.history.back();
                </script>
                `);
        }

        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).send(`
                <script>
                    alert("E-mail já cadastrado")
                    window.history.back();
                </script>
                `);
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
        res.status(500).send((`
                <script>
                    alert("Erro ao criar usuário")
                    window.history.back();
                </script>
                `));
    }
}

module.exports = {
    logar,
    registrar
};