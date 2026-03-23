# 🚧 REPOSITORY MIGRATED 🚧

**Attention Recruiters and Visitors:**

This repository served as the initial foundation for the LibreFLIX Back-end. To align with Software Engineering best practices and ensure a seamless Developer Experience (DX), this project has evolved into a **Full-Stack Monorepo** architecture.

👉 **[CLICK HERE TO VIEW THE OFFICIAL & UPDATED REPOSITORY]([coloque-seu-link-aqui](https://github.com/SoaresThales/libreflix-fullstack))** 👈

---

# LibreFlix API

REST API for managing a movie catalog, built as part of the LibreFlix project.

## Overview

LibreFlix API evolved from a simple in-memory application into a containerized, database-driven backend.

This project focuses on understanding real-world backend architecture, including persistence, validation, security, and containerized environments.

---

## Tech Stack & Architecture

* **Runtime:** Node.js (v20 Alpine)
* **Framework:** Express.js (RESTful API)
* **Database:** MongoDB (NoSQL)
* **ODM:** Mongoose (schema modeling & validation)
* **Infrastructure:** Docker & Docker Compose
* **Security:** Custom header-based authentication + environment variables (.env)

---

## Features

* Full CRUD for movies
* MongoDB persistence with Mongoose
* Schema-based validation
* Protected routes (POST, PATCH, DELETE)
* Dynamic genres endpoint
* Containerized environment with Docker Compose

---

## Project Structure

```
server.js
docker-compose.yml
Dockerfile
.env (not committed)
```

---

## How to Run (Docker - Recommended)

1. Create a `.env` file:

```
ADMIN_PASSWORD=your_password
```

2. Start the application:

```
docker-compose up --build
```

3. API will be available at:

```
http://localhost:3000
```

---

## API Endpoints

### Get all movies

```
GET /api/movies
```

### Create movie (protected)

```
POST /api/movies
```

Header:

```
admin-password: your_password
```

### Update movie (protected)

```
PATCH /api/movies/:id
```

### Delete movie (protected)

```
DELETE /api/movies/:id
```

### Get genres

```
GET /api/genres
```

---

## Example Request Body

```json
{
  "title": "Movie name",
  "year": 2000,
  "genre": "Drama",
  "plot": "Description",
  "poster": "url",
  "trailer": "url",
  "featured": false
}
```

---

## Known Limitations

* Authentication is simplified (header-based)
* No rate limiting
* No advanced error handling layer yet

---

## Next Steps

* Introduce JWT authentication
* Add centralized error handling middleware
* Split into controllers / routes / services
* Add pagination and filtering
* Deploy to a cloud platform

---

## About

This project is part of my transition into software development, focusing on building real-world backend systems step by step.
