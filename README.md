# Bhargavi Kancheti - Full Stack Developer Portfolio

Methods and tools used to build a modern, high-performance portfolio website.

## 🚀 Project Overview

This is a personal portfolio website built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). It showcases my projects, skills, and experience with a focus on **modern UI/UX**, **glassmorphism**, and **smooth animations**.

## ✨ Key Features

-   **Modern UI/UX**: clean, dark-themed design with glassmorphism effects.
-   **Advanced Animations**: Powered by `framer-motion` for smooth page transitions, scroll reveals, and interactive elements.
-   **Dynamic Backgrounds**: Animated particles and glowing gradients that perform well on all devices.
-   **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop.
-   **Contact Form**: Integrated with a backend API to receive messages directly.

## 🛠️ Tech Stack

### Frontend
-   **React** (Vite)
-   **Tailwind CSS** (Styling)
-   **Framer Motion** (Animations)
-   **Lucide React** (Icons)
-   **React Router DOM** (Routing)

### Backend
-   **Node.js** & **Express.js**
-   **MongoDB** (Database)
-   **Mongoose** (ODM)
-   **Cors** & **Dotenv**

## 📂 Project Structure

```
Profile/
├── client/          # Frontend React Application
│   ├── src/
│   │   ├── components/  # Reusable UI components (Hero, Navbar, etc.)
│   │   ├── App.jsx      # Main application component
│   │   └── main.jsx     # Entry point
│   └── ...
├── server/          # Backend Node.js Application
│   ├── models/      # Database models
│   ├── routes/      # API routes
│   └── index.js     # Server entry point
└── ...
```

## 🚀 Getting Started

### Prerequisites
-   Node.js installed
-   MongoDB installed or a MongoDB Atlas connection string

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Setup Frontend**
    ```bash
    cd client
    npm install
    npm run dev
    ```

3.  **Setup Backend**
    ```bash
    cd server
    npm install
    # Create a .env file with PORT and MONGO_URI
    npm start
    ```

## 🎨 Customization

-   **Colors**: The project uses Tailwind CSS. You can customize the color palette in `tailwind.config.js`.
-   **Content**: Update the text and data in the component files (`Hero.jsx`, `About.jsx`, etc.) to reflect your own profile.

## 📄 License

This project is licensed under the MIT License.
