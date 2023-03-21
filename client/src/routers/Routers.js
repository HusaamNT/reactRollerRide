import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Tickets from "../pages/Tickets";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/login/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
