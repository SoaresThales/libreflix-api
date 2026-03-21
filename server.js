const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

// ==========================================
// FUNÇÕES AUXILIARES (Bibliotecário)
// ==========================================

function readDatabase() {
    try {
        const data = fs.readFileSync(__dirname + '/database.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("❌ Erro ao ler o banco de dados:", error);
        return [];
    }
}

function writeDatabase(movies) {
    try {
        fs.writeFileSync(__dirname + '/database.json', JSON.stringify(movies, null, 2));
    } catch (error) {
        console.error("❌ Erro ao salvar no banco de dados:", error);
    }
}

// ==========================================
// SEGURANÇA
// ==========================================

const ADMIN_PASSWORD = "WeWillAwaysHaveParis"; // Precisa de aspas para ser uma String!

function checkAdmin(req, res, next) {
    const passwordReceive = req.headers['admin-password'];
    // Log para depuração:
    console.log("Senha que chegou no servidor:", passwordReceive);
    console.log("Senha que eu esperava:", ADMIN_PASSWORD);
    if (passwordReceive === ADMIN_PASSWORD) {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized", message: "Macaco escreveu errado!" });
    }
}

// ==========================================
// ROTAS
// ==========================================

app.get('/', function(req, res) {
    res.send("Hello, world! My LibreFlix-API is alive!");
});

app.get('/api/movies', function(req, res) {
    const movies = readDatabase();
    res.json(movies);
});

app.get('/api/genres', function(req, res) {
    const movies = readDatabase();
    const genres = [...new Set(movies.map(movie => movie.genre))];
    res.json(genres);
});

app.post('/api/movies', checkAdmin, function(req, res) {
    const movies = readDatabase();
    const body = req.body;

    // Validação básica
    if (!body.title || !body.genre || !body.poster) {
        return res.status(400).json({ message: "Macaco esqueceu dados obrigatórios!" });
    }

    const lastMovie = movies[movies.length - 1];
    const newId = lastMovie ? lastMovie.id + 1 : 1;

    // Criando um novo objeto com o ID no TOPO por capricho organizacional
    const newMovie = {
        id: newId,
        ...body
    };

    movies.push(newMovie);
    writeDatabase(movies);

    res.status(201).json({
        message: "Filme adicionado com sucesso!",
        movie: newMovie
    });
});

app.delete('/api/movies/:id', checkAdmin, function(req, res) {
    const idToDelete = parseInt(req.params.id);
    let movies = readDatabase();

    const initialLength = movies.length;
    movies = movies.filter(movie => movie.id !== idToDelete);

    if (movies.length === initialLength) {
        return res.status(404).json({ error: "Not Found", message: "Filme não encontrado!" });
    }

    writeDatabase(movies);
    res.json({ message: "Filme deletado com sucesso! Cruj-cruj-cruj-Tchau!" });
});

app.listen(PORT, function() {
    console.log("🚀 Servidor rodando perfeitamente na porta: " + PORT);
});