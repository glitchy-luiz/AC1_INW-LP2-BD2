const multer = require('multer')

module.exports = (app)=>{

    var conexao = require('../config/bancodedados')

    var gallery = require('../models/gallery')


    //abrir formulario
    app.get('/gallery',async(req,res)=>{
        //conectar com o banco de dados
        conexao()
        //buscar os documentos gravados na coleção gallery
        var documentos = await gallery.find()
        //console.log(documentos)
        //enviar a documentação para a página ejs
        res.render('gallery.ejs',{resultado:documentos})
    })

    //importar as configurações do upload
    var upload = require('../config/upload')
    //fazer o upload da imagem na pasta de destino
    app.post('/gallery',(req,res)=>{
        //tentar fazer o upload da imagem
        upload(req,res,async (err)=>{
            if(err instanceof multer.MulterError){
                res.send("O arquivo é muito grande")
            }else if(err){
                res.send("Tipo de arquivo inválido")
            }else{
                //conectar com o database
                conexao()
                //gravar arquivo na collection gallery
                var arquivo = await new gallery(
                    {
                        arquivo:req.file.filename
                    }
                ).save()
                //apos o upload voltar para o formulario
                res.redirect('/gallery')
            }
        })

    })
}