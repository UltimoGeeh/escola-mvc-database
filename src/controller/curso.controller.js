// importando o arquivo de configuraçõa do banco  de dados
const cursoModel = require("../models/curso.model")

async function listar(request, response) {

   const cursos = await cursoModel.listarTodosCursos()
    console.log(cursos)

  // renderizar a view listar-cursos
  response.render('listar-cursos', { cursos })
  }

function criar(request, response) {
  response.send("Função responsável por criar um curso")
}

function atualizar(request, response) {
    response.send("Função que atualizar o curso")
}

function deletar(request, response) {
    response.send("Responsavel por deletar um curso!")
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar
}