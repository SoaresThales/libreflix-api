const express = require('express'); //importação
const cors = require('cors'); //importando segurança
const app = express(); //inicialização
app.use(cors()); // avisando que o front-end pode pedir aqui
const PORT = 3000;

// ==========================================
// 2. O NOSSO BANCO DE DADOS (O ESTOQUE)
// ==========================================

const movies = [
    {
        id: 1,
        title: "Steamboat Willie",
        year: 1928,
        genre: "Animation",
        plot: "Mickey Mouse pilots a steamboat and turns everything into musical instruments in his first official appearance.",
        poster: "https://image.tmdb.org/t/p/original/xEur3v9kMfw4zDueCh4wrUuhW5A.jpg",
        trailer: "https://www.youtube.com/embed/8LdpvQHg3e0?si=TVuuOCMdWiv2YanF",
        featured: false
    },
    {
        id: 2,
        title: "The Kid",
        year: 1921,
        genre: "Comedy / Drama",
        plot: "The Tramp cares for an abandoned child, but events put that relationship in jeopardy.",
        poster: "https://image.tmdb.org/t/p/original/cvWzCDo3pQyoasvqzRIP7oHK3qn.jpg",
        trailer: "https://www.youtube.com/embed/9pIyRBDpdAM?si=nlO24g7xSXp6Z8MN",
        featured: true
    },
    {
        id: 3,
        title: "Felix in Hollywood",
        year: 1923,
        genre: "Animation",
        plot: "Felix the Cat travels to Hollywood and meets the greatest stars of the silent film era.",
        poster: "https://image.tmdb.org/t/p/original/3P3ztTCe5jL0Rza8m5ZsUT5NhH7.jpg",
        trailer: "https://www.youtube.com/embed/7eSE5hzTyIo",
        featured: false
    },
    {
        id: 4,
        title: "Minnie the Moocher",
        year: 1932,
        genre: "Animation",
        plot: "Betty Boop runs away from home and ends up in a spooky cave with Cab Calloway.",
        poster: "https://image.tmdb.org/t/p/original/k6D27wXkz0hufbi9EtEqRXFXbcm.jpg",
        trailer: "https://www.youtube.com/embed/qFhMuFEtIh4?si=HSH-dyki13YEc6ya",
        featured: false
    },
    {
        id: 5,
        title: "A Trip to the Moon",
        year: 1902,
        genre: "Sci-Fi",
        plot: "A group of astronomers travel to the Moon in a cannon-propelled capsule and explore its surface.",
        poster: "https://image.tmdb.org/t/p/original/acBq3tmTcBAHCjbH7Wi5nt8jnfA.jpg",
        trailer: "https://www.youtube.com/embed/qcyZ70tO9-Q",
        featured: false
    }
]

// ==========================================
// ROTAS (Os Pedidos)
// ==========================================

app.get('/', function(req,res){
    res.send("Hello, world! My LibreFlix-API is alive!");
});

app.get('/api/movies', function(req, res){
    res.json(movies);
});

// ==========================================
// A IGNIÇÃO DO SERVIDOR
// ==========================================

app.listen(PORT, function(){
    console.log("🚀 Servidor rodando perfeitamente na porta: " + PORT);
});

