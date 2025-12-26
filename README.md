<!-- PROJECT LOGO -->
<p align="center">
  <img src="https://user-images.githubusercontent.com/your-avatar-here/your-logo.png" alt="Resume Builder Logo" width="200" />
  <h1 align="center">📇 Resume Builder Web App</h1>
  <p align="center">
    A full-stack Resume Builder application to create, edit, save, and download professional resumes.
  </p>
</p>

---

## 🚀 About The Project

[![Website Preview](https://user-images.githubusercontent.com/your-screenshot-here/preview.png)](https://your-deployed-link)

**Resume Builder Web App** is a dynamic web application that lets users build ATS-friendly resumes quickly and easily.  
Built with **React (Vite)** on the frontend, **Node.js & Express** on the backend, and **MongoDB** for data storage.

It includes:
- User authentication with JWT
- Editable multi-section resume
- Live preview and PDF generation
- Secure backend with MongoDB
- ATS compliant resume structure

---

## 🛠 Built With

| Frontend | Backend | Database | Auth | Styling | PDF |
|:---------:|:--------:|:---------:|:-----:|:--------:|:---:|
| React (Vite) | Node.js, Express | MongoDB | JWT | Tailwind CSS | react-to-print |

---

## ⭐ Features

✨ User Signup/Login  
✨ Personal Information form  
✨ Experience, Education, Skills, Projects, Achievements  
✨ Save data to database  
✨ Live resume preview  
✨ Download as PDF  
✨ Browser navigation and auto scroll

---

## 🧠 How It Works

1. User signs up or logs in
2. Fill in resume sections (personal, skills, experience etc.)
3. Save data to backend
4. Preview resume live
5. Download resume as PDF

---

## 📦 Getting Started

### 🔹 Prerequisites

You must have the following installed:

- Node.js  
- npm or yarn  
- MongoDB or Atlas cluster

---

### 🔧 Backend Setup

```bash
cd backend
npm install
Create .env:

ini
Copy code
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=supersecret
Start server:

```bash
Copy code
npm run dev
🌐 Frontend Setup
bash
Copy code
cd frontend
npm install
Create .env:

ini
Copy code
VITE_API_URL=http://localhost:5000
Start frontend:

bash
Copy code
npm run dev
🧩 API Endpoints
Auth Routes
Method	Route	Description
POST	/api/user/signup	Register user
POST	/api/user/login	Login user

Resume Routes
Method	Route	Description
POST	/api/resume/save	Save/update resume
GET	/api/resume/my	Get current user resume
```
📊 Screenshots
<p align="center"> <img src="https://user-images.githubusercontent.com/your-screenshot1.png" width="400" /> <img src="https://user-images.githubusercontent.com/your-screenshot2.png" width="400" /> </p>
💡 Why This Project?
Many resume builders generate static templates or require manual editing.
This project solves that by offering a dynamic, editable interface with database persistence, making it suitable for real users and job seekers.

🏆 Achievements
✔ ATS-friendly resume format
✔ JWT auth with protected routes
✔ Modular and scalable architecture
✔ Clean and user-friendly UI

🧪 Testing
You can test the APIs with tools like:

Postman

Insomnia

Browser

Make sure your backend is running before testing.

🤝 Contributing
Contributions are what make the open source community such an amazing place to learn and create.

To contribute:

Fork the project

Create your feature branch (git checkout -b feature/xyz)

Commit your changes (git commit -m 'Add some feature')

Push (git push origin feature/xyz)

Open a Pull Request

👨‍💻 Author
👤 Tamal Kumar Khan
GitHub: @tamal006

📫 Contact
Email: tamalkumarkhan@gmail.com
LinkedIn: https://www.linkedin.com/in/tamal-kumar-khan/

⭐ Support
If you found this project helpful, give it a ⭐ on GitHub!










