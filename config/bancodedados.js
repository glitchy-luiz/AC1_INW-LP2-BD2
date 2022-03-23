const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://<credenciais mongoAtlas>.yqfxr.mongodb.net/test')
}

module.exports = conexao