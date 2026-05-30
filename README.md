Microservices Containerization Assessment

Project Overview

This project demonstrates containerization of Node.js microservices using Docker and Docker Compose.

The project contains three services:

•⁠  ⁠User Service
•⁠  ⁠Product Service
•⁠  ⁠Gateway Service

⸻

Technologies Used

•⁠  ⁠Node.js
•⁠  ⁠Express.js
•⁠  ⁠Docker
•⁠  ⁠Docker Compose

⸻

Folder Structure

Submission/
│
├── User-service/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
├── Product-service/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
├── Gateway-service/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md

⸻

Setup Instructions

Step 1: Clone Repository

git clone 

Step 2: Navigate to Project

cd Submission

Step 3: Start Docker Containers

docker compose up –build

⸻

Running Services

Service	Port
User Service	3000
Product Service	3001
Gateway Service	3003

⸻

Test Services

Open browser:

http://localhost:3000

http://localhost:3001

http://localhost:3003

⸻

Docker Commands Used

Build and Run Containers

docker compose up –build

Stop Containers

docker compose down

View Running Containers

docker ps

⸻

Troubleshooting

Port Already in Use

Run:

docker stop $(docker ps -q)

Then restart containers.

⸻

Screenshots

Add screenshots of:

•⁠  ⁠docker compose up –build
•⁠  ⁠docker ps
•⁠  ⁠Browser outputs
•⁠  ⁠VS Code folder structure

⸻

Author

Nilofer Taj Siddiquee
