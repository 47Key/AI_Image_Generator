import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from '../../containers/Navbar';
import { GiBrain } from 'react-icons/gi';
import styles from '../../styles/Generate.module.css';

type Submitted = Boolean;
type Loading = Boolean;
type PhotoURL = string;

type Prompt = {
    prompt: String,
    date: BigInt,
};

const ImageGenerator = () => {
    const [submitted, setSubmitted] = useState<Submitted>(false);
    const [loading, setLoading] = useState<Loading>(false);
    const [picture, setPicture] = useState<PhotoURL>('');

    const handleNewPrompt = () => {
        // Set all states back to default
        setLoading(false);
        setSubmitted(false);
        setPicture('');
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Set submitted & loading states
            setSubmitted(true);
            setLoading(true);            
            
            // Simplify data by storing inside of prompt object
            const prompt:Prompt = {
                prompt: event.target[0].value,
                date: event.target[1].value,
            };
            
            // Send prompt to it's api route handler
            const sendPromptToApi = await fetch("/api/SendPrompt", {
                method: 'POST',
                body: JSON.stringify(prompt),
            })
            .catch ((err:any) => {
                return err;
            })

            // Set Loading & Picture states back to display the generated image
            setLoading(false);
            setPicture("https://stablediffusion.0gku54smtinjm.us-east-1.cs.amazonlightsail.com/static/images/image.png");
        } catch (err) {
          console.log(err);     
        }
    };

    return (
        <div className="w-screen">
            <Navbar />
            <div className="w-screen h-auto bg-gray-900 flex flex-col justify-center items-center">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    {!submitted && !loading &&
                        <div className="mt-20">
                            <h1 className="text-2xl">Please put your prompt below</h1>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col my-10 justify-center items-center">
                                    <label hidden htmlFor="prompt" />
                                    <div className="relative w-full p-[3px] rounded-xl bg-gradient-to-l from-green-300 via-blue-500 to-purple-600">
                                        <input required type="string" id="prompt" placeholder="random placeholder options" className="w-full p-4 text-black rounded-[10px] focus:outline-none" />
                                        <span className="absolute inset-y-0 inline-flex items-center right-3 text-purple-600">
                                            <GiBrain size={30} />
                                        </span>
                                       
                                    </div>

                                    <input hidden readOnly value={Date.now()}/>
                                    
                                    <div className='mt-5 p-[2px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md hover:shadow-[-1px_1px_5px] hover:shadow-green-300'>
				                        <button type="submit" className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0 bg-gray-900">
				                        	Submit
				                        </button>
			                        </div>
                                </div>
                            </form>

                        </div>  
                    }
                    {submitted && loading &&
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="pb-10 text-3xl">Loading your prompt...</h1>
                            <LoadingSpinner />
                        </div>
                    }
                    {submitted && !loading &&
                        <div className="w-screen h-screen flex flex-col justify-center items-center text-white mx-10">
                            <h1 className="flex flex-wrap text-2xl pb-10">This is your generated image</h1>
                            <div id={styles.imageContainer} className="p-[2px] sm:w-11/12 sm:h-11/12 md:w-3/4 md:h-3/4 2xl:w-1/2 2xl:h-1/2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-xl m-5">
                                <img className="rounded-[8px] w-full h-full" src={picture} />
                            </div>
                            <div className='flex flex-row justify-center items-center w-[300px] max-w-[300px] p-[2px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md hover:shadow-[-1px_1px_5px] hover:shadow-green-300'>
				                <button onClick={handleNewPrompt} className="w-full h-full items-center border-0 py-1 px-3 focus:outline-none rounded text-2xl bg-gray-900">
				                	Try Again
				                </button>
                                <div className="relative">
                                    <span className="absolute inset-y-0 inline-flex items-center right-3 text-purple-600">
                                        <GiBrain size={30} />
                                    </span>
                                </div>
			                </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    );
}

export default ImageGenerator