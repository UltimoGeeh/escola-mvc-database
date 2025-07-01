function listar(request, response) {
    response.send("Função responsável pela listagem.")
}

function criar(request, response) {
    response.send("Função que cria o professor")
}

function atualizar(request, response) {
    response.send("Função que atualiza a sala do professor")
}

function deletar(request, response) {
    response.send("Responsavel por demitir um professor!")
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar
}