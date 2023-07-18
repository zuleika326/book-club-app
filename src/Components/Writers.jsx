/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Writers = ({ writersList }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Authors</h1>
      <ul className="space-y-6">
        {writersList.map(author => (
          <li key={author.id} className="bg-rose-600 rounded shadow p-4">
            <div className="flex justify-between">
              <div>
                <span className="font-bold">{author.name}</span>
                <span className="text-blue-500"> - {author.title}</span>
              </div>
              <div className="text-right">
                <span className="text-blue-500">Age: {author.age}</span>
              </div>
            </div>
            <p className="mt-2">{author.bio}</p>
            <div className="mt-4">
              <h2 className="text-lg font-bold">Background</h2>
              <ul className="list-disc ml-6">
                {author.background.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Writers;
