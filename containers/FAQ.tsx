import React from "react";
import SiMagento from 'react-icons/si';

const FAQ = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-32">
        <h1 className="text-5xl text-center leading-snug font-extrabold py-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-blue-400 to-purple-500">
          Frequently Asked Questions.
        </h1>
      <div className="space-y-4">
        <div className="w-full p-1 rounded-xl bg-gradient-to-r from-rose-400 via-blue-400 to-purple-500">
          <details className="group" open>
            <summary
              className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-900"
            >
              <h5 className="text-white font-extrabold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h5>
              {/* <SiMagento /> */}
              {/* <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg> */}
            </summary>
            <div className="bg-gray-900 rounded-lg">
              <p className="px-4 -mt-5 py-10 leading-relaxed text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
              </p>
            </div>
          </details>
        </div>

        <div className="w-full p-1 rounded-xl bg-gradient-to-r from-rose-400 via-blue-400 to-purple-500">
          <details className="group">

            <summary
              className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-900"
              >
              <h5 className="font-extrabold text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h5>

              <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="bg-gray-900 rounded-lg">
              <p className="px-4 -mt-5 py-10 leading-relaxed text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
