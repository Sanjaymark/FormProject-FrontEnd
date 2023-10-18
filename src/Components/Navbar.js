import React from "react";
import { useNavigate } from "react-router-dom";


export const Navigationbar = () =>{

    const Navigate = useNavigate();
    return (
      <div className="navbar bg-info text-neutral-content">
        <div className="flex-1">
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-neutral mx-20 dark " onClick={() => Navigate("/form/all")}>Dashboard</button>
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-neutral mx-10 dark" onClick={() => Navigate("/form/add")}>Form</button>
        </div>
        <div className="flex-none ">
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-neutral mx-10 dark" onClick={() => Navigate("/user/login")}>Login</button>
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-neutral  dark" onClick={() => Navigate("/user/signup")}>SignUp</button>
        </div>
      </div>
      );
}




export const Navigationbar2 = () =>{

  const Navigate = useNavigate();
  return (
    <div className="navbar bg-info text-neutral-content">
      <div className="flex-1">
        <button className="btn btn-xs sm:btn-sm md:btn-md btn-neutral dark " onClick={() => Navigate("/form/all")}>Dashboard</button>
      </div>
      <button className="btn btn-xs sm:btn-sm md:btn-md btn-neutral  dark" onClick={() => Navigate("/form/add")}>Form</button>
    </div>
    );
}