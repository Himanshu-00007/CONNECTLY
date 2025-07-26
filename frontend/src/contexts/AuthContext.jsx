import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";
import server from '../environment';

import axios from 'axios';

export const AuthContext=createContext({});

const  client=axios.create({
    baseURL:`${server}/api/v1/users`
});
export const AuthProvider=({children})=>{
    const authContext=useContext(AuthContext);
     const [userData,setUserData]=useState(authContext);
     const router=useNavigate();
     const handleRegister=async(name,username,password)=>{
        try{
            let request=await client.post("/register",{
                name:name,
                username:username,
                password:password,
            });
            if(request.status===httpStatus.CREATED){
                return request.data.message;
            }
        }
        catch(err){
            throw err;
        }
     }
     const handleLogin=async (username,password)=>{
        try{
            let request=await client.post("/login",{
                username:username,
                password:password,
            });
            if(request.status===httpStatus.OK)
            {
                localStorage.setItem("token",request.data.token);
                router("/home");
            }
        }
        catch(err)
        {
            throw err;
        }
     }
     const getHistoryOfUser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token is missing from localStorage");
                return []; // Return empty array to prevent error
            }
    
            let request = await client.get("/get_all_activity", {
                params: { token }
            });
    
            console.log("API Response:", request.data);
            return request.data;
        } catch (err) {
            console.error("Error fetching history:", err);
            return [];
        }
    };
    

    const addToUserHistory = async (meetingCode) => {
        try {
            let request = await client.post("/add_to_activity", 
                { meeting_code: meetingCode },
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            console.log("Added to history:", request.data); 
            return request.data;
        } catch (e) {
            console.error("Error adding to history:", e);  
            throw e;
        }
    }


    const data = {
        userData, setUserData, addToUserHistory, getHistoryOfUser, handleRegister, handleLogin
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}
