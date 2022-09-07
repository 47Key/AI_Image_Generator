import React from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <header id={styles.navbarBackground} className="text-white body-font w-screen">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Tailwind Snippets</span>
        </a> */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-green-300">First Link</a>
          <a className="mr-5 hover:text-green-300">Second Link</a>
        </nav>
        <div className="mt-5 p-[2px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md hover:shadow-[-1px_1px_5px] hover:shadow-green-300">
          <Link href="/generate">
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0 bg-gray-900">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
