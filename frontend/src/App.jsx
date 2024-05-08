import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import ListingPage from "./components/listing/ListingPage";
import Profile from "./components/user/Profile";
import Owner from "./components/user/Owner";
import CreateListing from "./components/listing/CreateListing";
import UpdateListing from "./components/listing/UpdateListing";
import ViewListing from "./components/listing/ViewListing";
import UpdateUser from "./components/user/UpdateUser";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

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
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/contact/:id" element={<Contact />} />
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
