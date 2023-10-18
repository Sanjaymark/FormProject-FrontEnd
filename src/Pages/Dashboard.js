import React from "react";
import { Navigationbar, Navigationbar2 } from "../Components/Navbar";
import { DataList } from "./Product/GetAllData";


export const Dashboard = () =>{

    const token = localStorage.getItem("token");

    return <div>
      {token ? <Navigationbar2 /> : <Navigationbar />}
      <DataList />
    </div>
};