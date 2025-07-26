
import express from "express";
import mongoose from "mongoose";
import httpStatus from "http-status";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import {createServer} from "node:http";
import { Server } from "socket.io";
import userRoutes from "./routes/user.routes.js";
import { connectToSocket } from "./controllers/socketManagers.js";
const app=express();
const server=createServer(app);
const io=connectToSocket(server);
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);


const start=async()=>{
    const connectionDb=await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected DB host: ${connectionDb.connection.host}`);
    server.listen(8000,()=>{
        console.log("listening on port 8000");
    });
};
start();