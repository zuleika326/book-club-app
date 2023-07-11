// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";

export default function Author() {
  
  return (
    <div>
      <main className="container mx-auto py-8">
        <div className="h-auto max-w-lg ml-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Popular Authors</h1>
          <div>
            <input
              className="rounded-lg bg-slate-300 mt-2 my-2 mb-2 flex-col  px-4 py-2 hover:bg-blue-600 "
              type="text"
              placeholder="J.K Rowling"
            />
          </div>
          <div>
            <input
              className="rounded-lg bg-slate-300 px-4 py-2 mt-2 my  hover:bg-blue-600 "
              type="text"
              placeholder="Stephen Kings"
            />
          </div>
          <div>
            <input
              className="rounded-lg bg-slate-300 px-4 py-2 mt-2 my-2 hover:bg-blue-600 "
              type="text"
              placeholder="Deila Owens"
            />
          </div>

          <p className="text-white-800 mb-8">
            Discover and discuss your favorite books with Authors and fellow
            readers.
          </p>
          <a
            href="#"
            className="bg-rose-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            see more
          </a>
        </div>
        {/* {showCategories ? 'Hide Categories' : 'See More'}
{showCategories && (
        <ul className="mt-4">
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      )} */}

        <div className="relative bg-[url-{https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWmM0SUliqLTbAu2NpmBR9NUSq2hz2KD1xg&usqp=CAU}]">
          
        </div>
        <h1 className="mb-4">Browse huge library</h1>
        <Link to="/books">

        <button
          className=" bg-rose-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded  "
      >
          Show All
          </button>        
          </Link>
      </main>
    </div>
  );
}
