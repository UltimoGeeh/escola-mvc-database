// importar a biblioteca do mysql2 para se conectr com o banco de dados mysql
const mysql = require('mysql2/promise')

// configuração da conexão do banco de dados
const conexao = mysql.createConnection({
    host: 'localhost', //endreço do servidor
    user: 'root', // usuário do banco de dados
    password: 'root', // senha do banco de dados
    database: 'sistema_escolar' // nome do banco de dados
})

// exportar essa conexão para ser utilizada em outros arquivos
module.exports = {
    conexao
}
