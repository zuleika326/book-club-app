/* eslint-disable no-unused-vars */
import React from 'react'
import Writers from './Writers'; 
function WritersList() {
    const authors = [
        
        {
            id: 1,
            name: 'Patricia Cornwell',
            title: 'Author',
            age: 35,
            bio: 'Patricia Williams is an accomplished author with several published books.',
            background: [
              'Graduated with a degree in English Literature',
              'Worked as a journalist for five years',
              'Received multiple awards for his writing'
            ]
          },
          {
            id: 1,
            name: 'Agatha Christie',
            title: 'Author',
            age: 40,
            bio: ' Agatha Christie is an accomplished author with several published books.',
            background: [
              'Graduated with a degree in English Literature',
              'Worked as a CID for five years',
              'Received multiple awards for his writing'
            ]
          },
          {
            id: 1,
            name: 'Jeffrey Alex',
            title: 'Author',
            age: 22,
            bio: 'Jeffrey Alex is an accomplished author with several published books.',
            background: [
              'Graduated with a degree in English Literature',
              'Worked as a journalist for five years',
              'Received multiple awards for his writing'
            ]
          },
          {
            id: 1,
            name: 'Jin Yong',
            title: 'Author',
            age: 40,
            bio: 'Jin Yong is an accomplished author with several published books.',
            background: [
              'Graduated with a degree in English Literature',
              'Worked as a novelist for three years',
              'Received multiple awards for his writing'
            ]
          },
      ];
    
  return (
    <div>
        <Writers writersList={authors} />
    </div>
  )
}
export default WritersList