/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate, Link} from "react-router-dom";

const Ebook = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-5">E-Books</h1>
      <p className="text-lg text-gray-600">
        
      </p>
      <Link to="/BooksE">
      <button className="mt-5 bg-rose-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Read Now
      </button>
      </Link>
    </div>
    
  );
};

export default Ebook;
