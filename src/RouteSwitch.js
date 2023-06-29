import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register"
import Home from "./Home";
import { AuthContext } from "./contexts/AuthContext";

export default function RouteSwitch () {
  const { currentUser } = useContext(AuthContext);

  //Redirect to login page if no one is logged in
  const ProtectedRoute = ({ children }) => {
    if(!currentUser) {
      return (
        <Navigate to='/login' />
      )
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}