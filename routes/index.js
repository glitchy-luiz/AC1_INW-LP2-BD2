module.exports = (app) => {
    var conexao = require('../config/bancodedados')
    conexao()
    var mensagens = require('../models/mensagem')
    var mygrids = require('../models/mygrid')

    app.get('/', async(req,res) => {
        var mygrid = await mygrids.find().limit(3).sort({'_id':-1})
        .then((mygrid)=>{
            res.render('index.ejs',{dados:mygrid})
            console.log(mygrid)
        })
        .catch(()=>{
            res.render('index.ejs')
        })
    })


    app.post('/', (req, res)=> {

        var mygrid = new mensagens({

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