import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Hogwarts Houses</h1>
      <Home/>
    </div>
  )
};

export default HomePage;
