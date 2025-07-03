// Importa o framework Express, que é usado para criar servidores web em Node.js
const express = require('express');

//importação dos controllers

const cursoController = require('./controller/curso.controller');
const alunoController = require('./controller/aluno.controller');
const professorController = require('./controller/professor.controller')

// Cria uma instância da aplicação Express (nosso servidor web)
const app = express();

// configurar o ejs template engine
app.set('view engine', 'ejs')

// configurar as pastas das views
app.set('views', './src/views')

// Cria uma rota GET que responde quando alguém acessa '/vagas'
app.get('/cursos', cursoController.listar) 
app.post('/cursos', cursoController.criar) 
app.put('/cursos/:id', cursoController.atualizar) 
app.delete('/cursos/:id', cursoController.deletar)

app.get('/professores', professorController.listar)
app.post('/professores', professorController.criar)
app.put('/professores/:id', professorController.atualizar)
app.delete('/professores/:id', professorController.deletar)

app.get('/alunos', alunoController.listar)
app.post('/alunos', alunoController.criar)
app.put('/alunos/:id', alunoController.atualizar)
app.delete('/alunos/:id', alunoController.deletar)

// Inicia o servidor na porta 3000 (localhost:3000)
app.listen(3000, () => {

  // Exibe uma mensagem no console confirmando que o servidor está rodando
  console.log('Servidor rodando em http://localhost:3000');

});