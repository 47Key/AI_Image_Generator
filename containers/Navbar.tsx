import React from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <header id={styles.navbarBackground} className="text-white body-font">
      <div className="flex flex-wrap w-screen p-2 flex-row justify-between items-center">
        <div className="cursor-pointer">
          <Link href="/">
            <img className="ml-10" width="50px" height="50px" src={"./key_ai.png"} />
          </Link>
        </div>
        <div className="p-[2px] mr-10 bg-gradient-to-r from-purple-500 to-rose-400 rounded-md hover:shadow-[-1px_1px_5px] hover:shadow-rose-300">
          <Link href="/generate">
            <button className="inline-flex cursor-pointer items-center border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0 bg-gray-900">
              Generate
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
