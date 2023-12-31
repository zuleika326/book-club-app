/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  function navigateHomePage() {
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
      return;
    }

    
    navigate("/HomePage");
  }

  function validateEmail(email) {
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="bg-blue-200 flex flex-col justify-center h-screen">
      <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <h2 className="text-4xl dark:text-white font-bold text-center">
          Login
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label>Email</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label>Password</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <button
          onClick={navigateHomePage}
          className="w-full my-5 py-2 bg-rose-700 rounded-lg"
        >
          Login
        </button>
        <div className="flex justify-between text-gray-400 py-2">
          <label className="flex items-center">
            <input className="mr-2" type="checkbox" />
            Remember Me?
          </label>
          <p>Forgot Password?</p>
        </div>
        <div>
          <p>
            Need an account?{" "}
            <a
              className="mr-4 hover:underline md:mr-6 cursor-pointer"
              onClick={handleSignUp}
              href="#"
            >
              SignUp
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
