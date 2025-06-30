// Importa o framework Express, que é usado para criar servidores web em Node.js
const express = require('express');

//importação dos controllers

const cursoController = require('./controller/curso.controller')

// Cria uma instância da aplicação Express (nosso servidor web)
const app = express();

// Cria uma rota GET que responde quando alguém acessa '/vagas'
app.get('/cursos', cursoController.listar ) 

// Inicia o servidor na porta 3000 (localhost:3000)
app.listen(3000, () => {

  // Exibe uma mensagem no console confirmando que o servidor está rodando
  console.log('Servidor rodando em http://localhost:3000');

});