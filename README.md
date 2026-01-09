# 🚀 Running the React Project Locally

This document provides a step-by-step guide on how to set up and run this React project on your local machine.

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (version 16 or higher recommended)
* **npm** (comes bundled with Node.js) or **yarn**

You can verify the installation by running:

```bash
node -v
npm -v
```

---

## 📦 Step 1: Clone the Repository

Clone the project repository using Git:

```bash
git clone https://github.com/Hillary-cloud/iprescribe.git
```

Navigate into the project directory:

```bash
cd iprescribe
```

---

## 📥 Step 2: Install Project Dependencies

Install all required dependencies using one of the following commands:

### Using npm

```bash
npm install
```

### Using yarn

```bash
yarn install
```

---

## ▶️ Step 3: Start the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🌐 Step 4: View the Application

Open your web browser and navigate to the appropriate URL shown in your terminal after starting the server.

---

## 🛠️ Step 5: Build for Production (Optional)

To create an optimized production build, run:

```bash
npm run build
```

The output will be generated in the `build` or `dist` directory.

---

---

## 📁 Project Structure

```text
src/
 ├── components/
 ├── pages/
 ├── store/
├── service/
├── hooks/
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

---

## 📌 Notes

To see the dashboard, navigate to it manually with 

http://localhost:5173/dashboard

---

## 📌 Other Added features

* This project is built with **React**.
* **Material UI (MUI)** is used for UI components.
* Light/Dark theme switching is managed globally via a store.
* Hero section animations
* Table filtering and authomatic searching
* Mobile responsive view for both landing and dashboard pages

---
