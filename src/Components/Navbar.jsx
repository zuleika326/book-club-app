// eslint-disable-next-line no-unused-vars
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
        <div className="container mx-auto flex items-center justify-between">
          <nav className=" w-full rounded-lg">
            <ul className="flex space-x-4 mt">
              <li>
                <a href="#" className="text-black font-medium p-4 flex">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-rose-700 flex p-4"
                >
                  E-books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-rose-700 flex p-4"
                >
                  Audio books
                </a>
              </li>
              <li>
                <Link to="./authors">
                  Free content
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-rose-700 p-4 flex"
                >
                  Author
                </a>
              </li>
              <li>
                <a href="#" className="text-rose-700  font-medium p-4 flex">
                  Premium Library
                </a>
              </li>
              <input
                className="rounded-lg bg-slate-800 p-2 m-2 mb-2 text-white"
                type="search"
                placeholder="Search"
              />
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
