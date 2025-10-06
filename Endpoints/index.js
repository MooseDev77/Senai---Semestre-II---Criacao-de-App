const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


const cliente = sequelize.define('cliente', {
    nome: { 
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    },
    DataNacimento: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    
    },
    protocolo: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    }
});

const produto = sequelize.define('produto', {
    nome: { 
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    },
    lote: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    },
    validade: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    }
});

const funcionario = sequelize.define('funcionario', {
    nome: { 
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    },
    cpf: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false, // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
        unique: true // Unique -> Não pode ter valores repetidos
    },
    rg: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false, // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
        unique: true // Unique -> Não pode ter valores repetidos
    },
    matricula: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false, // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
        unique: true // Unique -> Não pode ter valores repetidos
    
    },
    DataNacimento: {
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    },
    salario: {
        type: DataTypes.FLOAT, // Tipo Float
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    },
    telefone:{
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
    },
    email:{ 
        type: DataTypes.STRING, // Tipo Varchar
        allowNull: false, // Not Null -> Obrigatório -> Não pode ser nulo ou vazio
        unique: true // Unique -> Não pode ter valores repetidos
    }
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get ('/funcionarios', async (req, res) => {
    const funcionarios = await funcionario.findAll();
    res.json(funcionarios);
});

app.post('/funcionarios', async (req, res) => {
    const { nome, cpf, rg, matricula, DataNacimento, salario, telefone, email } = req.body;
    try {
        const novoFuncionario = await funcionario.create({ nome, cpf, rg, matricula, DataNacimento, salario, telefone, email });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get ('/produto', async (req, res) => {
    const produtos = await produto.findAll();
    res.json(produtos);
});

app.post('/produto', async (req, res) => {
    const { nome, lote, validade } = req.body;
    try {
        const novoProduto = await produto.create({ nome, lote, validade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get ('/cliente', async (req, res) => {
    const clientes = await cliente.findAll();
    res.json(clientes);
});

app.post('/cliente', async (req, res) => {
    const { nome, DataNacimento, protocolo } = req.body;
    try {
        const novoCliente = await cliente.create({ nome, DataNacimento, protocolo });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
        console.log('Conectando ao banco de dados...');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
});