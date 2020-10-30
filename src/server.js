// SERVER
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, // não guarde em memoria (DESATIVAR) 
})

//Inicio da configuração do server
server

//receber os dados do req.body
.use(express.urlencoded({ extended: true }))

// config arquivos estáticos (css, cripts, imagens)
.use(express.static("public")) 

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// START DO SERVER
.listen(5500)



