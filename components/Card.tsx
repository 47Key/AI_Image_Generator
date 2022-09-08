import React from 'react';
import styles from '../styles/Home.module.css';

interface Card {
    title: string,
    description: string,
}

const Card = ({title, description}:Card) => {
    return (
        <div id={styles.card} className="flex w-[500px] min-w-[300px] h-full flex-col text-center items-center justify-center rounded-2xl bg-gradient-to-r my-3 mx-5 from-rose-400 to-purple-500">
          <div id={styles.cardInside} className="flex flex-col justify-center h-full items-center m-0.5 bg-gray-900 sm:p-10 rounded-[14px] z-50 flex-wrap">
                <h5 className="text-3xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-rose-400 via-blue-400 to-purple-400">{title}</h5>
                <p className="mt-2 text-sm text-white">{description}</p>
          </div>
        </div>
    );
}

export default Card;
