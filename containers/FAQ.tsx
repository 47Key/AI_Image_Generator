import React from "react";
import styles from '../styles/Home.module.css';
import { SiMagento } from 'react-icons/si';

const FAQ = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-32">
        <h1 className="text-5xl text-center leading-snug font-extrabold py-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-blue-400 to-purple-500">
          Frequently Asked Questions.
        </h1>
      <div id={styles.faqContainer} className="text-center space-y-4 flex flex-col h-full justify-center items-center">
        <div className="w-full p-1 rounded-xl bg-gradient-to-r from-rose-400 via-blue-400 to-purple-500">
          <details className="group" open>
            <summary
              className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-900"
            >
              <h5 className="text-white font-extrabold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h5>
                <SiMagento size={20} />
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
              <h5 className="font-extrabold text-white pr-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h5>
              <SiMagento size={20} />
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
