function listar(request, response) {
    response.send("Função responsável pela listagem.")
}

function cadastrar(request, response) {
    response.send("Função que cadastro o curso")
}

function deletar(request, response) {
    response.send("Responsavel por deletar um curso!")
}

module.exports = {
    listar,
    cadastrar,
    deletar
}