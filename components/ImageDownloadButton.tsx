import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import styles from "../styles/Home.module.css";

const ImageDownloadButton = () => {
    return (
      <div id={styles.iconButton} className="flex flex-col h-full items-center justify-center px-10">
        <div className="flex flex-col items-center rounded-lg justify-center p-1 bg-gradient-to-r from-purple-500 to-rose-400 hover:shadow-[-1px_1px_5px] hover:shadow-rose-300">
            <a href="/api/ImageDownload" download>
              <button className="flex items-center justify-center rounded-md p-1 bg-gray-900">
                <MdOutlineFileDownload size={30} />
              </button>
            </a>
        </div>
      </div>
    );
}

export default ImageDownloadButton;