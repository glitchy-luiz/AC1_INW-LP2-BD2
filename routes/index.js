module.exports = (app) => {
    var conexao = require('../config/bancodedados')
    conexao()
    var modelo = require('../models/mensagem')

    app.get('/', (req,res) => {
        var mygrid = await modelo.find()
        .then((mygrid)=>{
            res.render('index.ejs',{dados:mygrid})
            console.log(mygrid)
        })
        .catch(()=>{
            res.render('index.ejs')
        })
    })


    app.post('/', (req, res)=> {

        var documento = new modelo({

                nome: req.body.first_name,
                sobrenome: req.body.last_name,
                email: req.body.email,
                mensagem: req.body.message

        })
        .save()
        .then(() => {
            res.redirect('/')
        })
        .catch(() => {
            res.send("Não foi possível gravar o documento no Banco de Dados")
        })

    })
}