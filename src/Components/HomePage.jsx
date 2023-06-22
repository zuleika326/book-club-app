// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function HomePage() {
  return (
    <div className="bg-gray-100">
    <header className="bg-gray-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
       
        <nav className=' w-full rounded-lg  '>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-black font-medium">Home</a></li>
            <li><a href="#" className="text-white font-medium">E-books</a></li>
            <li><a href="#" className="text-white font-medium">Audio books</a></li>
            <li><a href="#" className="text-white font-medium">Free content</a></li>
            <li><a href="#" className="text-white font-medium">Author</a></li>
            <li><a href="#" className="text-rose-700  font-medium">Premium Library</a></li>
            <input className='rounded-lg bg-slate-800 ' type="search" placeholder='Search' />
            <button className='bg-rose-700 rounded-lg'>SignUp</button>
            <button className='bg-rose-700 rounded-lg'>Login</button>
            
          </ul>
        </nav>
      </div>
    </header>
    {/* <main className="container mx-auto py-8">

      <h1 className="text-4xl font-bold mb-4">Popular Authors</h1>
      <input className='rounded-lg bg-slate-300 mt-2 my-2 mb-2 flex-col' type="text" />
      <input className='rounded-lg bg-slate-300' type="text" />
      <input className='rounded-lg bg-slate-300' type="text" />
      <p className="text-gray-800 mb-8">Discover and discuss your favorite books with Authors and fellow readers.</p>
      <a href="#" className="bg-rose-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
        see more
      </a>
      <img className='flex py-4 justify-center items-center ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWmM0SUliqLTbAu2NpmBR9NUSq2hz2KD1xg&usqp=CAU" alt="" />
    </main> */}
    <footer className="bg-gray-200 py-4 mt-8">
      <div className="container mx-auto text-center">
    
      </div>
    </footer>
  </div>
  )
}
