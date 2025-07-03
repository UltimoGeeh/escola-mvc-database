const bancoDados = require("../config/banco-dados")

async function listarTodosCursos() {
      // Abrir a conexão com o banco de dados
      const conexao = await bancoDados.conexao
    
      // Executar a consulta de SELECT no banco de dados
      // Desestruturação do resultado da consulta
      const query = await conexao.execute("SELECT * FROM cursos")

      // Retornar os cursos
      return query[0]
}

module.exports = {
    listarTodosCursos
}