const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');


// Consfiguração do Sequelize para conectar ao banco de dados MySQL
const sequelize = new Sequelize('db_aula', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definição do modelo de Usuários.
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Confuguração do servidor Express.
const app = express(); // Criação da aplicação Express.
app.use(cors());// Habilitação do CORS para permitir requisições do frontend.
app.use(express.json());// Middleware para parsear JSON no corpo das requisições.
const port = 3000;// Porta onde o servidor irá escutar.


// Criando rotas da API.
// Rota para listar todos os usuários.
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários.' });
    }
});


// Rota para adicionar um novo usuário.
app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const novousuario = await Usuario.create({ nome, email, telefone });
        res.status(201).json(novousuario);
    } catch (error) {
        res.status(400).json({ menssage:'Verifique se o e-mail já existe.' });
    }
 
});

// Inicia o servidor após sincronizar criar tabela no banco de dados.
sequelize.sync().then(() => {
    //Cria a tabela no banco de dados e inicia o servidor.
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`); //Crase
        console.log('Banco de dados sincronizado.');
    });
}).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});

