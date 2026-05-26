# 🔐 Password Manager

## 🚀 Overview

Password Manager is a **full-stack web application** built using **Vite + React** for the frontend and **Node.js + Express** for the backend.  
The application allows users to securely manage and store passwords for different websites.

Users must first create an account using the **Sign-Up page** and then log in to access the password manager dashboard.

Once logged in, users can:

- Save website credentials
- Edit saved passwords
- Delete stored passwords
- View stored login details

The backend is deployed on **Render**, and all user data is stored in **MongoDB Atlas**.

The application is fully responsive and uses animated icons from **Lordicon** to create a modern and interactive user experience.

---

# ✨ Features

## 🔐 User Authentication
- User Sign-Up functionality
- Secure Login system
- Access control for password management

## 💾 Save Passwords
Users can store:
- Website Name
- Username
- Password

## ✏️ Edit Passwords
Modify previously saved credentials anytime.

## 🗑️ Delete Passwords
Remove saved credentials instantly.

## 👁️ Show / Hide Password
Toggle password visibility using eye icons.

## 📋 Copy Credentials
Quickly copy usernames or passwords using copy icons.

## 🌐 Full Stack Architecture
- Frontend built with React + Vite
- Backend built with Node.js + Express
- Database hosted on MongoDB Atlas

## 📱 Fully Responsive Design
Optimized for:
- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

## 🎨 Modern UI
Uses animated icons from **Lordicon** for better interactivity and UI experience.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend UI |
| Vite | Frontend Build Tool |
| Node.js | Backend Runtime |
| Express.js | Backend Framework |
| MongoDB Atlas | Cloud Database |
| Render | Backend Deployment |
| CSS | Styling |
| Lordicon | Animated Icons |

---

# 📂 Project Structure

```bash
Password-Manager/
│
├── Backend/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── public/
│   ├── icons/
│   ├── copy.svg
│   ├── eye.svg
│   ├── openeye.svg
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Manager.jsx
│   │   ├── Navbar.jsx
│   │   └── SignUp.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
│
└── README.md
```

---

# 📖 Folder Description

| Folder/File | Description |
|-------------|-------------|
| `Backend/` | Backend server and API logic |
| `server.js` | Main backend server file |
| `public/` | Public static assets |
| `icons/` | Icon assets |
| `copy.svg` | Copy icon |
| `eye.svg` | Hidden password icon |
| `openeye.svg` | Visible password icon |
| `favicon.svg` | Website favicon |
| `src/assets/` | Images and frontend assets |
| `hero.png` | Main hero image |
| `src/components/` | React components |
| `Login.jsx` | Login page |
| `SignUp.jsx` | User registration page |
| `Manager.jsx` | Password manager dashboard |
| `Navbar.jsx` | Navigation bar |
| `App.jsx` | Main application component |
| `main.jsx` | React entry point |
| `vite.config.js` | Vite configuration |

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pankaj-2612/Password-Manager.git
```

## 2️⃣ Navigate Into Project Folder

```bash
cd Password-Manager
```

---

# 🖥️ Frontend Setup

## Install Frontend Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# ⚙️ Backend Setup

## Navigate to Backend Folder

```bash
cd Backend
```

## Install Backend Dependencies

```bash
npm install
```

## Start Backend Server

```bash
node server.js
```

Backend server runs on:

```bash
http://localhost:3000
```

---

# 🌐 Database Configuration

This project uses **MongoDB Atlas** as the cloud database.

Create a `.env` file inside the `Backend` folder and add:

```env
MONGO_URI=your_mongodb_connection_string
```

---

# 🚀 Deployment

## Frontend
Can be deployed using:
- Vercel
- Netlify

## Backend
Backend is deployed on:

- Render

## Database
Database hosted on:

- MongoDB Atlas

---

# 🧑‍💻 Usage

## 🔐 Create Account
Users must first sign up using the registration page.

## 🔑 Login
Log in using registered credentials.

## 💾 Save Credentials
Enter:
- Website Name
- Username
- Password

Then save the credentials securely.

## ✏️ Edit Saved Passwords
Update website credentials whenever needed.

## 🗑️ Delete Passwords
Remove saved passwords permanently.

## 👁️ Toggle Password Visibility
Use eye icons to show or hide passwords.

## 📋 Copy Credentials
Use copy icons for quick copying.

---

# 🎯 Key Concepts Used

This project demonstrates:

- Full Stack Development
- REST APIs
- Authentication Flow
- React Components
- State Management
- CRUD Operations
- MongoDB Integration
- Responsive Design
- Backend Deployment
- Cloud Database Usage

---

# 📱 Responsive Design

The application is fully responsive across all devices.

### Supported Devices

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

---

# 🔮 Future Improvements

Possible future enhancements:

- 🔒 Password Encryption
- 🔑 JWT Authentication
- 🌙 Dark Mode
- ☁️ Cloud Sync
- 📧 Email Verification
- 🔐 Forgot Password System
- 📂 Password Categories
- 📊 Password Strength Checker

---

# 🤝 Contributing

Contributions are welcome!

## Steps to Contribute

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your code
5. Push changes
6. Open a Pull Request

---

# 👨‍💻 Author

## Pankaj Swami

- GitHub: [Pankaj-2612](https://github.com/Pankaj-2612)

Feel free to connect and share feedback.

---

# 📜 License

This project is created for learning and educational purposes.

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

---

# 🎉 Happy Coding!
