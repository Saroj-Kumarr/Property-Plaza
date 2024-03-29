import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Profile from "./components/Profile";
import Header from "./components/Header";
import CreateListing from "./components/CreateListing";
import UpdateListing from "./components/UpdateListing";
import Listing from "./components/Listing";
import Search from "./components/Search";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ListingCard from "./components/ListingCard";
import ListingPage from "./components/ListingPage";
import ListingProfilePage from "./components/ListingProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<ListingCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<ListingPage />} />
        <Route path="/list" element={<ListingProfilePage/>} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/update-listing/:listingId" element={<UpdateListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
