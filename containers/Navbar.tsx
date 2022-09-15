import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <header id={styles.navbarBackground} className="text-white body-font">
      <div className="flex flex-wrap w-screen p-2 flex-row justify-between items-center">
        <div className="cursor-pointer sm:ml-0 md:ml-5">
          <Link href="/">
            <Image width={50} height={50} src={"/key_ai.png"} />
          </Link>
        </div>
        <div className="p-0.5 mr-10 bg-gradient-to-r from-purple-500 to-rose-400 rounded-lg hover:shadow-[-1px_1px_5px] hover:shadow-rose-300">
          <Link href="/generate">
            <button className="inline-flex cursor-pointer items-center border-0 py-1 px-3 focus:outline-none rounded-md text-base md:mt-0 bg-gray-900">
              Generate
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
