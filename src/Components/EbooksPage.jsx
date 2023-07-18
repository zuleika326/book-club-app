/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export default function EbooksPage() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    
    fetch("")
      .then((response) => response.json())
      .then((data) => setEbooks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>E-books</h1>
      <ul>
        {ebooks.map((ebook) => (
          <li key={ebook.id}>
            <h3>{ebook.title}</h3>
            <p>Author: {ebook.author}</p>
            <p>Genre: {ebook.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
