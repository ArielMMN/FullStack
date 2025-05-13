require("colors")
var http = require('http');
var express = require('express');
var bodyParser = require("body-parser")
var app = express();
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient
const uri = `mongodb+srv://arielmmnogueira:v6FbgdNXIlqOrP7t@cluster0.okekvqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

var dboo = client.db("exemplo2_bd");
var posts = dboo.collection("postss");

var dbooo = client.db("webmotors");
var user = dbooo.collection("usuarios");
var carros = dbooo.collection("carros");

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

app.get('/cadast_user', function(requisicao, resposta){
    resposta.redirect('projetc/lab_10/user/cadastro.html')
})

app.get('/log_user', function(requisicao, resposta){
    resposta.redirect('projetc/lab_10/user/login.html')
})

app.get('/blog', function(requisicao, resposta) {
    posts.find().toArray(function(err, resultados) {
        if (err) {
            resposta.send('Erro ao buscar os posts');
        } else {
            resposta.render('blog.ejs', { posts: resultados });
        }
    });
});

app.post('/cad_blog', function(requisicao, resposta){
    resposta.redirect('projetc/lab_09/cadastrar_post.html')
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

    let data = {db_nome: nome,db_email: email,db_senha: senha,db_nascimento: nascimento}
    
    usuarios.insertOne(data, function (err) {
          if (err) {
            resp.render('respost.ejs', 
                {mensagem: "Erro ao cadastrar usuário!", usuario: nome, login: email})
          }else {
            resposta.render('respost.ejs', 
                {mensagem: "Cadastro finalizado com sucesso!", usuario: nome, login: email, idade: nascimento })       
          };
        });
       
      });
    


    

app.post('/log', function(requisicao, resposta){
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;

    // busca banco de dados
    let data =  {db_email: email, db_senha: senha};
    //procure nos usarios com esses "requisitos"
    usuarios.find(data).toArray(function(err,items){
        console.log(items);
      if (items.length == 0) {
        resposta.render('respost_log.ejs', 
            {mensagem: "Usuário/senha não encontrado!",login: email})
      }else if (err) {
        resposta.render('respost_log.ejs', 
            {mensagem: "Erro ao logar usuário!",login: email})
      }else {
        resposta.render('respost_log.ejs', 
            {mensagem: "Login realizado com sucesso!",login: email})       
      };

    })
})

app.get('/for_ejs' , function(requisicao, resposta){
    let num = requisicao.query.num;
    resposta.render('exemplo_for.ejs',{tamanho: num});
})

app.post("/atualiza_usuario", function(requisicao, resposta) {
    var data = { db_email: requisicao.body.email, db_senha: requisicao.body.senha };
    var newData = { $set: {db_senha: requisicao.body.novasenha} };

    usuarios.updateOne(data, newData, function (err, result) {
      console.log(result);
      if (result.modifiedCount == 0) {
        resposta.render('respost_log.ejs', {mensagem: "Usuário/senha não encontrado!",login: requisicao.body.email})
      }else if (err) {
        resposta.render('respost_log.ejs', {mensagem: "Erro ao atualizar usuário!",login: requisicao.body.email})
      }else {
        resposta.render('respost_log.ejs', {mensagem: "Usuário atualizado com sucesso!",login: requisicao.body.email})        
      };
    });
   
  });

  app.post("/remover_usuario", function(requisicao, resposta) {
    var data = { db_email: requisicao.body.email, db_senha: requisicao.body.senha };
   
    usuarios.deleteOne(data, function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        resposta.render('respost_log.ejs', {mensagem: "Usuário/senha não encontrado!",login: requisicao.body.email})
      }else if (err) {
        resposta.render('respost_log.ejs', {mensagem: "Erro ao remover usuário!",login: requisicao.body.email})
      }else {
        resposta.render('respost_log.ejs', {mensagem: "Usuário removido com sucesso!",login: requisicao.body.email})        
      };
    });

  });




// lab 09
app.post('/cadpost', function(requisicao, resposta){
    let titulo = requisicao.body.titulo;
    let resumo = requisicao.body.resumo;
    let conteudo = requisicao.body.conteudo;

    let data = {db_titulo: titulo, db_resumo: resumo,db_conteudo: conteudo}
    
    posts.insertOne(data, function (err) {
          if (err) {
            resposta.render('resposta_blog.ejs', 
                {mensagem: "Não Cadastrato!"})
          }else {
            resposta.render('resposta_blog.ejs', 
                {mensagem: "Cadastro"})       
          };
        });
       
      });

app.get('/listaposts', function(requisicao, resposta) {
    posts.find().toArray(function(err, resultados) {
        if (err) {
            resposta.send('Erro ao buscar os posts');
        } else {
            resposta.render('lista_posts.ejs', { posts: resultados });
        }
    });
});

// lab 10
app.post('/cad_user', function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    let nascimento = requisicao.body.nascimento;

    let data = {db_nome: nome,db_email: email,db_senha: senha,db_nascimento: nascimento}
    
    user.insertOne(data, function (err) {
          if (err) {
            resposta.render('resposta_car_cad.ejs', 
                {mensagem: "Erro ao cadastrar usuário!", usuario: nome, login: email})
          }else {
            resposta.render('resposta_car_cad.ejs', 
                {mensagem: "Cadastro finalizado com sucesso!", usuario: nome, login: email, idade: nascimento })       
          };
        });
       
      });

app.post('/logi_user', function(requisicao, resposta){
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    
    // busca banco de dados
    let data =  {db_email: email, db_senha: senha};
    //procure nos usarios com esses "requisitos"
    user.find(data).toArray(function(err,items){
        console.log(items);
          if (items.length == 0) {
            resposta.render('resposta_car_log.ejs', 
                {mensagem: "Usuário/senha não encontrado!",login: email})
          }else if (err) {
            resposta.render('resposta_car_log.ejs', 
                {mensagem: "Erro ao logar usuário!",login: email})
          }else {
            resposta.redirect('projetc/lab_10/home.html')
          };
    
    })
})