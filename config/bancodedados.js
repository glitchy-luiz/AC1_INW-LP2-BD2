const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('')
}

module.exports = conexao
