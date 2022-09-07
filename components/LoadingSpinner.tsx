import React from 'react';
import styles from '../styles/Generate.module.css';

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center w-16 h-16 p-1 rounded-full animate-spin bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <div className="w-full h-full rounded-full bg-gray-900">
            </div>
        </div>
    );
}

export default LoadingSpinner;
