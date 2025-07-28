import express from "express";
import mongoose from "mongoose";
import httpStatus from "http-status";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import userRoutes from "./routes/user.routes.js";
import { connectToSocket } from "./controllers/socketManagers.js";

const app = express();
const server = createServer(app);

// ✅ CORS fix for specific origin
app.use(cors({
  origin: "https://connectly-wc11.onrender.com",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// ✅ Routes
app.use("/api/v1/users", userRoutes);

// ✅ Handle preflight CORS
app.options('*', cors());

// ✅ Socket connection
const io = connectToSocket(server);

// ✅ MongoDB + Server Start
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(import.meta.env.VITE_MONGO_URL);
    console.log(`MongoDB connected: ${connectionDb.connection.host}`);

    // ✅ Use Render's dynamic PORT
    const PORT = process.env.PORT || 8000;
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Server start error:", error);
  }
};

start();
