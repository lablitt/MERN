import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home.js";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default RouterConfig;
