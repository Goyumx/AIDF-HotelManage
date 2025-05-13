# 🏨 AI-Driven Hotel Management System

## Horizone

Horizone is an intelligent, full-stack hotel management platform designed to optimize booking, room allocation, guest interactions, and staff coordination using AI technologies.

## 🚀 Features

* 🔐 User Authentication & Authorization via [Clerk](https://clerk.dev)
* 🤖 AI-driven recommendations and guest interaction using [LangChain](https://www.langchain.com/) and [OpenAI](https://openai.com/)
* 📏 Room and booking management system
* 📊 Dashboard for administrators
* 📱 Responsive and intuitive frontend UI built with React and TailwindCSS

## 🍄Deployments

Front-End - [Click](https://aidf-hotel-manage-goyum-be.vercel.app/)

Back-End - [Click](https://aidf-hotel-manage-goyum-fe.vercel.app/)


## 🧠Tech Stack

### Frontend

- **React**: JavaScript library (Vite).
- **Redux Toolkit**: State management and API Requests.
- **Tailwind CSS**: CSS framework use for styling.
- **Shadcn UI**: Component library built on top of tailwind.
- **Clerk**: Prebuilt Authentication tool.
- **Zod**: Schema validation for API request.

### Backend

- **Node.js**: JavaScript runtime Environment.
- **Express + TS**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing hotel and booking data.
- **Langchain**: helps manage and use embeddings.
- **OpenAI**: For generating responses.

## 📁 Project Structure

```
root/
│
├── BE/                 # Backend - Node.js, Express, MongoDB, LangChain
│   └── src/
│       └── index.ts    # Main entry point
│
├── FE/                 # Frontend - React + Tailwind + Vite
│   └── AID-HotelMng-FE/
│       └── src/
│           └── App.jsx     # Main React App
```


## 🛠️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Goyumx/AIDF-HotelManage.git

```

### 2️⃣ Setup Environment Variables

Create a `.env` file in `BE/` with:

```env
CLERK_SECRET_KEY=your_clerk_secret_key
OPENAI_API_KEY=your_openai_api_key
CORS_ORIGIN=accesible_API
MONGODB_URL=your_mongo_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_key
```

Create a `.env` file in `FE/AID-HotelMng-FE` with:

```env
VITE_BACKEND_URL=your_backend_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```


### 3️⃣ Run the Backend

```bash
cd BE
npm install
npm run dev
```

### 4️⃣ Run the Frontend

```bash
cd FE
cd AID-HotelMng-FE
npm install
npm run dev
```

Frontend will run at `http://localhost:5173`, and backend at `http://localhost:8000` by default.



## 🧪 Testing

* Backend: Postman / Thunder Client for testing API endpoints
* Frontend: React Developer Tools, Network tab
* You can write automated tests using Vitest/Jest (To be implemented)



## 📌 To-Do / Coming Soon

* [ ] Payment integration (Stripe/PayPal)
* [ ] Real-time room availability updates
* [ ] More visual Enhancements
* [ ] Role-based access controls for staff vs admin

## 👨‍💼 Author

* Goyum | [GitHub](https://github.com/Goyumx)

