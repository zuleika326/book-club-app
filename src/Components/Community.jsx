/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Community = () => {
  const [discussions, setDiscussions] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('/api/discussions')
      .then((response) => {
        setDiscussions(response.data.discussions);
      })
      .catch((error) => {
        console.error('Error fetching discussions:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newDiscussion = { text, createdAt: new Date().toISOString() };
      axios.post('/api/discussions', newDiscussion)
        .then((response) => {
          setDiscussions([...discussions, response.data]);
          setText('');
        })
        .catch((error) => {
          console.error('Error posting discussion:', error);
        });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Community Discussions</h2>
      <div>
        {discussions.map((discussion) => (
          <div key={discussion.createdAt} className="bg-white shadow-md p-4 mb-4">
            <p>{discussion.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start a new discussion..."
          className="flex-1 rounded-l-md p-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-rose-700 text-white font-medium px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Community;
