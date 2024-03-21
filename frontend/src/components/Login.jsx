import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("User has not been logged in.");
        return;
      }

      const jsonResponse = await response.json();
      setLoading(false);
      setError(null);
      navigate("/profile");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-4/12 flex flex-col gap-5">
        <input
          onChange={handleChange}
          type="email"
          id="email"
          placeholder="email"
          className="border px-3 py-1"
        />
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="password"
          className="border px-3 py-1"
        />
        <button className="bg-slate-300 px-3 py-1 rounded-md">
          {loading ? "submitting..." : "Login"}
        </button>
        <p className="text-center">
          Have an account ?{" "}
          <span className="text-slate-600 font-bold">
            <Link to="/register">Register</Link>
          </span>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
