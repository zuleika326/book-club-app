// eslint-disable-next-line no-unused-vars
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8 font-bold">Sign Up</h2>

        <form className="max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg">
          <div className=" text-gray flex flex-col  py-2">
            <h1>Email</h1>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 border-solid border-2 border-sky-500"
              required
            />
          </div>
          <div className="text-gray flex flex-col  py-2 " >
            <h1>Password</h1>
            
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="text-gray flex flex-col  py-2">
            <input
              placeholder="SignUp"
              type="SignUp"
              id="SignUp"
              className=" p-2 w-full rounded-lg p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              required
            />
          </div>
          
          <h2>Already have an account?</h2>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
