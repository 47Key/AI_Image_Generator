import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Hero = () => {
  return (
    <section
      id={styles.heroBackground}
      className="w-screen text-white"
    >
      <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id={styles.heroText} className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-rose-500">
            Bring your Imagination.
            <span className="sm:block text-white">to Reality.</span>
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <div className="cursor-pointer mt-5 p-[2px] w-1/2 flex flex-row justify-center items-center bg-gradient-to-r from-purple-500 to-rose-400 rounded-md hover:shadow-[-1px_1px_5px] hover:shadow-green-300">
              <Link href="/generate">
                <button className="w-full items-center border-0 py-1 px-3 focus:outline-none rounded md:mt-0 bg-gray-900 text-2xl">
                  Generate an Image
                </button>
              </Link>
            </div>

            {/* <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/get-started">
            			Get Started
            			</a> */}

            {/* <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="/about">
          				Learn More
                		</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
