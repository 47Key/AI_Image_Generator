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
          <h1 className="leading-tight font-extrabold text-8xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
            Bring your Imagination
          </h1>
          <h2 className="text-white text-7xl">to Reality.</h2>
          <h3 className="max-w-xl mx-auto mt-4 sm:pt-0 md:pt-5 sm:text-2xl md:text-3xl">
            Where your ideas come to life
          </h3>

          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <div id={styles.heroButton} className="cursor-pointer mt-5 p-1 flex flex-row justify-center items-center bg-gradient-to-r from-purple-500 to-rose-500 rounded-lg hover:shadow-[-3px_1px_10px] hover:shadow-rose-300">
              <Link href="/generate">
                <button className="w-full items-center border-0 py-1 px-3 focus:outline-none rounded-md md:mt-0 bg-gray-900 text-2xl">
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
