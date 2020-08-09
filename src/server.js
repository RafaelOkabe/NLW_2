const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Servidor
const express = require('express')
const server = express()

//configurando nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    .use(express.urlencoded({extended: true}))
    //configurando arquivos estaticos (css, scripts, imagens)
    .use(express.static('public'))
    //configurando rotas de aplicação
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .listen(5500)