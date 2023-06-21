// eslint-disable-next-line no-unused-vars
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8">Sign Up</h2>
        <form>
          <div className="">
            <h1>Email</h1>

            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 border-solid border-2 border-sky-500"
              required
            />
          </div>
          <div className="mb-4 " >
            <h1>Password</h1>
            
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="SignUp"
              type="SignUp"
              id="SignUp"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <h2>Already have an account?</h2>
          <a href="login"></a>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;