# 🏠 ALX Listing App

## 📖 Project Overview
The **ALX Listing App** is a web application designed to replicate the core functionality of an Airbnb-style property listing platform.  
It allows users to view property listings through a clean, responsive interface built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

The main goal of this project is to:
- Demonstrate the use of **Next.js Pages Router** (not App Router)
- Enforce **TypeScript** type safety
- Apply **Tailwind CSS** for styling and responsiveness
- Build reusable and modular components

## 📁 Project Structure

alx-listing-app/
│
├── components/
│ └── common/
│ ├── Button.tsx # Reusable button component for actions like “Book Now”, “Details”, etc.
│ └── Card.tsx # Reusable card component for displaying property details (title, image, price, etc.)
│
├── interfaces/
│ └── index.ts # TypeScript interfaces for components (e.g., CardProps, ButtonProps)
│
├── constants/
│ └── index.ts # Contains constants and configuration data (e.g., API URLs, placeholder data)
│
├── public/
│ └── assets/ # Contains images, icons, and other static assets used throughout the app
│
├── pages/
│ └── index.tsx # The main landing page displaying property listings
│
├── styles/
│ └── globals.css # Global Tailwind CSS imports and base styles
│
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation



## ⚙️ How to Run the Project Locally

Follow the steps below to set up and run the **ALX Listing App** on your local machine.

### 1️⃣ Prerequisites
Before you start, ensure the following are installed:
- **Node.js** (v18 or later)
- **npm** (bundled with Node.js)
- **Git**

You can verify your installations by running:
```bash
node -v
npm -v
git --version

npm run dev

