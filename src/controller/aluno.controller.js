function listar(request, response) {
    response.send("Função responsável pela listagem.")
}

function criar(request, response) {
    response.send("Função que cração do aluno")
}

function atualizar(request, response) {
    response.send("Função que atualiza os dados do aluno")
}

function deletar(request, response) {
    response.send("Responsavel por deletar o aluno da existencia!")
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar
}