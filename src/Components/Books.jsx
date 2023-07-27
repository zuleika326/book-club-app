/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './API';
import { Navigate } from 'react-router-dom';

const handleAddToFavorite = () => {
 alert("book added successfully")

}

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
    
  }, []);

  
  return (
    <div className='books'>
      <div className='flex flex-wrap -mx-4'>
      
      {books.length > 0 &&
      books.map((book,index) => (
        <div key={index} className='w-1/4 px-4 mb-4'>
          <div className=' cards'>
            <img className='' src={book.simple_thumb} alt="" />
            <h1 className='' >{book.title}</h1>
            <p className="text-blue-600">Author: {book.author}</p>
            {book.audioAvailable ? (
              <p className="text-green-600">Audio available</p>
            ) : (
             <p className='text-red-600'>Audio not available</p>
            )}
            
            <div>
              <button className='bg-rose-500 rounded-lg p-2' onClick={handleAddToFavorite}>add to favorite
             
              
            </button></div>
      
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Books;
