import React from "react";
import { Navigationbar } from "../Components/Navbar";


export const HomePage = () =>{
    return <div className="h-full">
        <Navigationbar/>
        <div className="h-screen m-1">
            <div className=" flex justify-center items-center text-6xl hm">
                Welcome to Sanjay's Student Details Web App
                <span>Please Login/SignUp to explore the Content</span>
            </div>
        </div>
        
    </div>
};