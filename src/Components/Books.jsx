/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './API';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
  }, []);
  console.log(books)

  return (
    <div className='books'>
      
      {books.length > 0 &&
      books.map((book,index) => (
        <div key={index}>
          <div>
            <img src={book.simple_thumb} alt="" />
            <h1>{book.title}</h1>
          </div>
        </div>
      
      ))}
    </div>
  );
};

export default Books;