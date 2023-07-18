/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import premiumLibraryData from "./db.json";

export default function PremiumLibraryPage() {
  const [premiumBooks, setPremiumBooks] = useState([]);

  useEffect(() => {
    setPremiumBooks(premiumLibraryData.premiumLibrary);
  }, []);

  return (
    <div className="bg-rose-500">
      <h1>Premium Library</h1>
      <ul>
        {premiumBooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>{book.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
