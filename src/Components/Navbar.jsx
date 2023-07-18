/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate, Link} from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login")
  }
  const handleSignUp = () => {
    navigate("/SignUp")
  }
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-400 py-4 rounded-lg">
        <div className="container mx-auto flex items-center justify-between pointer-events-auto">
          <nav className=" w-full rounded-lg">
            <ul className="flex space-x-4 mt">
              <li>
                <a href="#" className="text-black font-medium p-4 flex">
                  Home
                </a>
              </li>
              
              <li className="text-white font-medium hover:text-rose-700 flex p-4">
                <Link to="EbooksPage">
                  E-books
                  </Link>
              </li>
              <li className="text-white font-medium hover:text-rose-700 flex p-4">
                <Link to="AudioBooksPage">
                  Audio books
                  </Link>
              </li>
              <li className="text-white font-medium hover:text-rose-700 p-4 flex">
                <Link to="FreeContentPage">
                  Free content
                  </Link>
              </li>
              <li className="text-white font-medium hover:text-rose-700 p-4 flex">
                <Link to= "WritersList">
                  Authors
                  </Link>
              </li>
              <li className="text-rose-700  font-medium p-4 flex" >
                 <Link to="PremiumlibraryPage">
                  Premium Library
                  </Link>
              </li>
             
              {/* <input
                className="rounded-lg bg-slate-800 p-2 m-2 mb-2 text-white"
                type="search"
                placeholder="Search"
              /> */}
             <button className="bg-rose-700 rounded-lg m-2 p-2 text-white " onClick={handleSignUp}>SignUp</button>
              <button
                className="bg-rose-700 rounded-lg m-2 p-2 text-white"
                onClick={handleLogin}
              >
                {" "}
                Login
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}