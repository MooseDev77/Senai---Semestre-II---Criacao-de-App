const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando conexão com o banco de dados MySQL
const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definido o modelo para tabalo no banco de dados
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not null -> Obrigatório -> Não pode ser nulo ou vazio
    },

    email: {
        type: DataTypes.STRING, // tipo varchar -> string -> Texto
        allowNull: false,// NOt null -> obrigatório -> Não pode ser nulo ou vazio
        unique: true // Não pode repetir
    }
});


const app = express(); // inicializa o express
app.use(cors()); // permite que api aceite conexão do front-end
app.use(express.json()); // Habilitar o uso de JSON nas requisições com json;

const port = 3000; // Porta que a API vai rodar

// Rota de teste
app.get('/', (req, res) => {
    res.send('API Funcionando!');

});

// ROTA PARA LISTAR TODOS OS USUÁRIOS
app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try { 
        const { nome, email } = req.body; // Pegando os dados do corpo da requisição
        const novoUsuario = await Usuario.create({ nome, email }); // Criando um novo usuário no banco de dados
        res.status(201).json(novoUsuario); // Retornando o usuário criado com status 201 (Criado)
    }   catch (error) {
        res.status(400).json({ mensagem: "E-mail já cadastrado."}); // Retornando o erro com status 400 (Bad Request)

    }
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL');
    });
}).catch((error) => {
    console.error('😢Não foi possível conectar ao banco de dados:');

});