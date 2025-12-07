# Goodreads Clone

A scalable Goodreads-like web application for book discovery, rating, reviewing, tracking reading status, social connections, book clubs, and personalized recommendations.

## Features
- User registration and login (JWT authentication)
- Book catalog with search and pagination
- Add books to personal bookshelf with status: Want to Read, Currently Reading, Read
- View and manage your bookshelf
- Update reading status or remove books from shelf
- **Community features:**
  - Create and join book clubs/groups
  - Start discussions and reply to topics
  - Search and browse groups by name, description, or tags
  - View group members and discussions
- Social features (book clubs, friends) 

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Frontend:** React, Next.js (App Router), TypeScript
---
# Docker Setup (Recommended)
This project includes a full Docker environment using Docker Compose. It runs:
- MongoDB (database)
- Backend API (Node.js + Express)
- Frondtend (Next.js)

## Prerequisites
- Install Docker Desktop
   https://www.docker.com/products/docker-desktop/

   Make sure Docker is running before continuing.

## Start the app with Docker
Make sure you're in the root folder `\Book-App`
   ```sh
   docker compose up --build
   ```

This will:
   - start MongoDB 

      exposed locally on: localhost:27017
   - build and start the backend
      
      which runs at: http://localhost:5000

      the environment variables come from `backend/.env.docker`.
   - build and start the frontend

      which runs at: http://localhost:3000

      the frontend communicates with the backend via `NEXT_PUBLIC_API_URL=http://localhost:5000`.

## When finished, make sure to stop Docker
   ```sh
   docker compose down
   ```

   To remove containers, networks, and volumes:
   ```sh
   docker compose down --volumes
   ```

## Docker Troubleshooting
If you see: `sh: next: not found`

- This means the final frontend Docker image is missing `node_modules`.

   Make sure the `frontend/Dockerfile` copies them correctly:
   ```sh
   COPY --from=builder /app/node_modules ./node_modules
   ```

If you get any build cache/snapshot errors:

- Reset the Docker BuildKit cache:
   ```sh
   docker buldx prune
   ```
   Then restart Docker Desktop.

# Local Development (Without Docker)
The backend and frontend can be run separately without Docker.

## Backend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```
2. **Configure environment:**
   - Copy `.env.example` to `.env`.
3. **Start the server:**
   ```sh
   npm run dev
   ```
   The backend runs on [http://localhost:5000](http://localhost:5000)
   
## Frontend Setup

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Start the frontend:**
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:3000](http://localhost:3000)

---

## Usage
- Register or log in
- Browse the book catalog
- Add books to your shelf and update their status
- View and manage your bookshelf
- Create or browse topics in community and add posts
- View others' profiles and follow others

---

## Development
- Backend: `cd backend && npm run dev`
- Frontend: `cd frontend && npm run dev`


