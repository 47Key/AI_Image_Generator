import React from 'react';
import styles from '../styles/Home.module.css';

const LoadingSpinner = () => {
    return (
        <div id={styles.loadingSpinner} className="flex flex-col justify-center items-center w-16 h-16 p-1.5 rounded-full animate-spin bg-gradient-to-r from-purple-500 to-rose-400">
            <div className="w-full h-full rounded-full bg-gray-900 blur-[1px]">
            </div>
        </div>
    );
}

export default LoadingSpinner;
