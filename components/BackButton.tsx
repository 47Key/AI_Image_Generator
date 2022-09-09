import React from "react";
import { MdArrowBack } from "react-icons/md";
import styles from "../styles/Home.module.css";

const BackButton = () => {
    return (
        <div id={styles.iconButton} className="flex flex-col h-full items-center justify-center px-5">
            <div className="flex flex-col items-center rounded-xl justify-center p-0.5 bg-gradient-to-r from-purple-400 to-rose-400 hover:shadow-[-1px_1px_5px] hover:shadow-rose-300">
                <a href="/">
                  <button className="flex items-center justify-center rounded-[9px] p-0.5 bg-gray-900">
                    <MdArrowBack size={30}/>
                  </button>
                </a>
            </div>
        </div>
    );
}

export default BackButton;