# 🎓 Exam Preparation App

A full-stack Exam Preparation and Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This platform allows administrators to manage exams, sessions, subjects, and question banks, while users (students) can register, log in, take exams, and view results.

---

## 🚀 Features

### 👤 User (Examinee) Features
- User Registration with Session Selection
- Secure Login System
- Dashboard Interface
- View Available Exams
- Attempt Exams
- View Exam Results
- Change Password
- Messaging System

### 👨‍💼 Admin Features
- Admin Login
- Dashboard Overview
- Manage Sessions
- Manage Subjects
- Add / Update / Delete Examinations
- Question Bank Management
- Manage Examinees
- Report Generation
- Reply to User Messages
- Change Password

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js (Vite)
- React Router
- Axios
- Bootstrap

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

## 📂 Project Structure
ExamPreparation-App
│
├── client/ # React Frontend
│
├── server/ # Node + Express Backend
│
└── README.md


---

## 🔐 Authentication System

- Separate login system for:
  - Users (Examinees)
  - Admin
- Role-based routing
- Password validation
- Session-based data handling

---

## 📊 Database Design

### Collections Used:
- Admin
- Examinee
- Session
- Subject
- Examination
- Question Bank
- Messages

All relations are managed using MongoDB ObjectId references.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ankitp3885/ExamPrepration-app.git

3️⃣ Backend Setup (for local development)
```bash
cd server
npm install
nodemon index.js
```

Server runs on:

```
http://localhost:5000
```

3️⃣ Frontend Setup
```bash
cd client
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

---

## ☁️ Deployment

This project is configured for **automatic deployment to Vercel**. It uses a `vercel.json` file to build both the React client and the Express backend as a serverless function.

### Steps to deploy

1. Sign in to [Vercel](https://vercel.com) and create a new project, linking your GitHub repository.
2. In your Vercel project settings add the following Environment Variables:
   - `MONGO_URI` &rarr; connection string for your MongoDB cluster
3. (Optional) If you want to deploy from GitHub Actions instead of letting Vercel build on push, set the following repository secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

The workflow at `.github/workflows/vercel-deploy.yml` will run on every push to `main` and automatically trigger a Vercel deployment.

> The Express backend lives in `server/index.js` and is exposed under `/api/*` routes. The React build is served from `client/dist`.


🌟 Future Improvements

JWT Authentication

Password Encryption (bcrypt)

Email Verification

Result Analytics Dashboard

Exam Timer Enhancement

Payment Integration

Online Proctoring

📌 Learning Outcomes

This project demonstrates:

Full-stack development

REST API development

MongoDB schema design

Role-based authentication

CRUD operations

Frontend-Backend integration

Real-world project structure

👨‍💻 Author

Ankit Prajapati
Full Stack MERN Developer