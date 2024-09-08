# Docker Node.js  Starter Application

This project is to show how to use Docker to run a Node.js app that serves a static website.


## How to Run the App with Docker

### Step 1: Install Docker - Download it from Docker's official website.
Windows/Mac: Install Docker Desktop and ensure it’s running.
Check docker verion to confirm the installation success    `docker --version`

### Step 2: Clone the Project
            git clone https://github.com/your-username/your-repo-name.git cd your-repo-name

### Step 3: Build the Docker Image
            docker build -t NodeDockerStarter
### Step 4: Run the Docker Container
            docker run -d -p 8080:8080 NodeDockerStarter
### Step 5: View the Web Page   --> http://localhost:8080

![image](https://github.com/user-attachments/assets/3e197cc5-5e4e-4549-b85d-a15ff0ab50ba)








