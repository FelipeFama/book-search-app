import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Home