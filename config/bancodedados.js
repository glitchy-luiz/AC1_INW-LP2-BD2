const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:S!mple4lu@fiaptecnico.yqfxr.mongodb.net/test')
}

module.exports