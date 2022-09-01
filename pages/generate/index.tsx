import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

type Submitted = Boolean;
type Loaded = Boolean;

type Prompt = {
    prompt: String,
    date: BigInt,
};

const ImageGenerator = () => {
    const [submitted, setSubmitted] = useState<Submitted>(false);
    const [loading, setLoading] = useState<Loaded>(false)
    const [response, setResponse] = useState(null);
    const [getBlob, setBlob] = useState<Blob>(null);
    const [getImage, setImage] = useState(<LoadingSpinner />);

    const handleNewPrompt = () => {
        setLoading(false);
        setSubmitted(false);
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
            .then((res) => res.json())
            .then((data) => {
                setResponse(`data:image/png;base64,${data.Image}`);
                setLoading(false);
            })
            .catch ((err:any) => {
                return err;
            })            
            
        } catch (error) {
          console.log(error);        
        }
    };

    useEffect(() => {
        const imageBlob = async () => { 
            fetch(response)
            .then((res) => res.blob())
            .then((data) => {
                setBlob(data);
            })
        }
        const makeBlob = new Blob([getBlob], { type:'image/png' });
        console.log("makeBlob", makeBlob)
        const displayImage = URL.createObjectURL(makeBlob);
        console.log("displayImage", displayImage);

        setImage(displayImage);
        console.log("getImage", getImage);

    }, [response])
    
    return (
        <div className="w-screen h-screen bg-mainDark flex flex-col justify-center items-center">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h1>Please put your prompt below</h1>
                {!submitted && !loading &&
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col my-10 justify-center items-center">
                                <label htmlFor="prompt">Prompt</label>
                                <input required type="string" id="prompt" placeholder="random placeholder options" className="p-5 rounded-xl text-black" />

                                <input hidden readOnly value={Date.now()}/>
                                <button type="submit" className="text-center bg-mainBlue p-2 rounded-lg mt-5">Submit</button>
                            </div>

                            {/* <input value={Date.now()}/> */}
                        </form>
                    </div>              
                }
                <div>
                    <img src="/tailwindcss.svg" />
                </div>
                {/* {submitted && loading &&
                    <div className="w-screen h-screen text-white">
                        <h1>The AI is processing your prompt, this should take a minute</h1>
                        <LoadingSpinner />
                    </div>
                }
                {submitted && !loading &&
                    <div className="w-screen h-screen text-white">
                        {getImage
                        ?
                            <img src={getImage}/>
                        :
                            <h1 className="text-white">Sorry Can't Display The Image</h1>

                        }
                        <button onClick={handleNewPrompt}>Try Again</button>
                    </div>
                } */}
            </div>
        </div>
    );
}

export default ImageGenerator