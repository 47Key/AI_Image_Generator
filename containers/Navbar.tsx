import React from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <header id={styles.navbarBackground} className="text-white body-font">
      <div className="flex flex-wrap w-screen p-5 flex-row justify-between items-center">
        {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Tailwind Snippets</span>
        </a> */}
        {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-green-300">First Link</a>
          <a className="mr-5 hover:text-green-300">Second Link</a>
        </nav> */}
        <div className="cursor-pointer">
          <Link href="/">
            <img id={styles.navbarLogo} width="50px" height="50px" src={"./key_ai.png"} />
          </Link>
        </div>
        <div className="p-[2px] bg-gradient-to-r from-purple-500 to-rose-400 rounded-md hover:shadow-[-1px_1px_5px] hover:shadow-green-300">
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
