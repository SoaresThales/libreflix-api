# LibreFlix API

REST API for managing a movie catalog, built as part of the LibreFlix project.

## Overview

This API provides endpoints to list and add movies, evolving from in-memory storage to file-based persistence using Node.js.

The goal of this project is to understand how a backend works in a real-world scenario, including data handling, persistence, and API design.

---

## Tech Stack

- Node.js
- Express
- File System (fs) for JSON persistence

---

## Features

- List all movies
- Add new movies
- Persistent storage using `database.json`
- Automatic ID generation

---

## Project Structure
/src (planned refactor)
server.js
database.js
database.json

---

## Run with Docker

Build and start the API:

docker build -t libreflix-api . <br>
docker run -p 3000:3000 libreflix-api
   
---

## Example Endpoint

### Get all movies
GET /movies

### Add a new movie

Body example:
``json
{
  "title": "Movie name",
  "year": 2000,
  "genre": "Drama",
  "plot": "Description",
  "poster": "url",
  "trailer": "url",
  "featured": false
}``

---

## Known Limitations

- No input validation yet

- No concurrency control for file writes

- Entire JSON file is rewritten on each update

---

## Next Steps

- Add validation for incoming data

- Improve error handling

- Refactor into controllers and routes

- Replace JSON storage with a database

---

## About

This project is part of my transition into software development, focusing on backend fundamentals and real-world problem solving.
