/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import audiobooksData from "./db.json";

export default function AudiobooksPage() {
  const [audiobooks, setAudiobooks] = useState([]);

  useEffect(() => {
    setAudiobooks(audiobooksData.audiobooks);
  }, []);

  return (
    <div className="bg-rose-300">
      <h1>Audiobooks</h1>
      <ul>
        {audiobooks.map((audiobook) => (
          <li key={audiobook.id}>
            <h3>{audiobook.title}</h3>
            <p>Author: {audiobook.author}</p>
            <p>Duration: {audiobook.duration}</p>
            <audio controls>
              <source src={audiobook.fileUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
