const express = require('express'); //importação
const cors = require('cors'); //importando segurança
const fs = require('fs'); // manipulador de arquivos
const { json } = require('stream/consumers');
const app = express(); //inicialização
app.use(cors()); // avisando que o front-end pode pedir aqui
app.use(express.json());
const PORT = 3000;

// ==========================================
// ROTAS (Os Pedidos)
// ==========================================

app.get('/', function(req,res){
    res.send("Hello, world! My LibreFlix-API is alive!");
});

app.get('/api/movies', function(req, res){
    const data = fs.readFileSync(__dirname + '/database.json', 'utf-8'); // node vai ler aqui agora
    const movies = JSON.parse(data); // transforma de volta em texto
    res.json(movies);
});

app.post('/api/movies', function(req, res) {
    const data = fs.readFileSync(__dirname + '/database.json', 'utf-8');
    const movies = JSON.parse(data);
    const newMovie = req.body;
    const lastMovie = movies[movies.length - 1];
    newMovie.id = lastMovie ? lastMovie.id + 1 : 1;
    movies.push(newMovie); // adiciona filmes novos na memória temporária
    fs.writeFileSync(__dirname + '/database.json', JSON.stringify(movies, null, 2)); // o "null, 2" serve apenas para formatar bonitinho com quebras de linha e recuos
    res.status(201).json({
        message: "Filme adicionado com sucesso!",
        movie: newMovie
    });
})

// ==========================================
// A IGNIÇÃO DO SERVIDOR
// ==========================================

app.listen(PORT, function(){
    console.log("🚀 Servidor rodando perfeitamente na porta: " + PORT);
});

