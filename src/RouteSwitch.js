import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register"
import App from "./App";

export default function RouteSwitch () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}