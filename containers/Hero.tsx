import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Hero = () => {
  return (
    <section
      id={styles.heroBackground}
      className="w-screen text-white"
    >
      <div className="w-full px-4 pb-32 pt-48">
        <div id={styles.heroText} className="w-full mx-auto text-center">
          <h1 className="font-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
            Bring your Imagination
          </h1>
          <h2 className="text-white text-5xl">to Reality.</h2>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <div id={styles.heroButton} className="cursor-pointer mt-5 p-[2px] flex flex-row justify-center items-center bg-gradient-to-r from-purple-500 to-rose-400 rounded-md hover:shadow-[-1px_1px_5px] hover:shadow-rose-300">
              <Link href="/generate">
                <button className="w-full items-center border-0 py-1 px-3 focus:outline-none rounded md:mt-0 bg-gray-900 text-2xl">
                  Generate an Image
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
