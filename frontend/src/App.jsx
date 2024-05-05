import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ListingCard from "./components/ListingCard";
import ListingPage from "./components/ListingPage";
import ViewListing from "./components/ViewListing";
import CreateListing from "./components/CreateListing";
import UpdateListing from "./components/UpdateListing";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import UpdateUserInfo from "./components/UpdateUserInfo";
import Owner from "./components/Owner";
import { useSelector } from "react-redux";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-user" element={<UpdateUserInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/owner/:id" element={<Owner />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/update-listing/:id" element={<UpdateListing />} />
        <Route path="/view-listing/:id" element={<ViewListing />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
