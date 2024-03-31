import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<ListingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        <Route path="/view-listing" element={<ViewListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
