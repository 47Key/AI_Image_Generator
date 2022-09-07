import React from 'react';

interface Card {
    title: string,
    description: string,
}

const Card = ({title, description}:Card) => {
    return (
        <div className="flex w-[500px] min-w-[300px] flex-col text-center items-center justify-center rounded-2xl bg-gradient-to-r my-3 mx-5 from-purple-600 via-blue-500 to-green-300">
          <div className="flex flex-col justify-center items-center m-0.5 bg-gray-900 p-10 rounded-[14px] z-50">
                <h5 className="text-3xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">{title}</h5>
                <p className="mt-2 text-sm text-white flex-wrap">{description}</p>
          </div>
        </div>
    );
}

export default Card;
