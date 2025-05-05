require("colors")
var http = require('http');
var express = require('express');
var bodyParser = require("body-parser")
var app = express();
app.use(express.static('public/'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
var server = http.createServer(app);
server.listen(80);
console.log("Servidor rodando...".green);

// exemplo de get e post

app.get('/', function(requisicao, resposta){
    resposta.redirect('projetc/projects.html')
})

app.get('/cadastra', function(requisicao, resposta){
    resposta.redirect('projetc/lab_08/Cadastra.html')
})

app.get('/loga', function(requisicao, resposta){
    resposta.redirect('projetc/lab_08/Login.html')
})

app.post('/inicio', function(requisicao, resposta){
    resposta.redirect('aula_04/index.html')
})

// query acessa informaçãos atravé da barra
app.get('/cadastrar', function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let email = requisicao.query.email;
    let senha = requisicao.query.senha;
    let nascimento = requisicao.query.nascimento;
    resposta.render('resposta.ejs', 
        {mensagem: "Cadastro finalizado com sucesso!", usuario: nome, login: email, idade: nascimento })

    console.log(nome,email,senha,nascimento)
})

//body acessa no corpo da pagina
app.post('/cadast', function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    let nascimento = requisicao.body.nascimento;
    resposta.render('respost.ejs', 
        {mensagem: "Cadastro finalizado com sucesso!", usuario: nome, login: email, idade: nascimento })
    

    console.log(nome,email,senha,nascimento)
})

app.post('/log', function(requisicao, resposta){
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    resposta.render('respost_log.ejs', 
        {mensagem: "Login realizado com sucesso!", login: email})
    

    console.log(email,senha)
})

app.get('/for_ejs' , function(requisicao, resposta){
    let num = requisicao.query.num;
    resposta.render('exemplo_for.ejs',{tamanho: num});
})