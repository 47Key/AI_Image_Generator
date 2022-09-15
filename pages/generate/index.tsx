import type { NextPage } from "next";
import React, { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../containers/Navbar";
import BackButton from "../../components/BackButton";
import ImageDownloadButton from "../../components/ImageDownloadButton";
import styles from "../../styles/Home.module.css";

type Submitted = Boolean;
type Loading = Boolean;
type PhotoURL = string;

type Prompt = {
  prompt: String;
  date: BigInt;
};

const ImageGenerator: NextPage = () => {
  const [submitted, setSubmitted] = useState<Submitted>(false);
  const [loading, setLoading] = useState<Loading>(false);
  const [picture, setPicture] = useState<PhotoURL>("");

  const handleNewPrompt = () => {
    // Set all states back to default
    setLoading(false);
    setSubmitted(false);
    setPicture("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Set submitted & loading states
      setSubmitted(true);
      setLoading(true);

      // Simplify data by storing inside of prompt object
      const prompt: Prompt = {
        prompt: event.target[0].value,
        date: event.target[1].value,
      };

      // Send prompt to it's api route handler
      const sendPromptToApi = await fetch("/api/SendPrompt", {
        method: "POST",
        body: JSON.stringify(prompt),
      }).catch((err: any) => {
        return err;
      });

      // Set Loading & Picture states back to display the generated image
      setLoading(false);
      setPicture(
        "https://stablediffusion.0gku54smtinjm.us-east-1.cs.amazonlightsail.com/static/images/image.png"
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className="bg-mainBG bg-cover bg-center bg-no-repeat bg-fixed">

        <Navbar />
        <div className="w-screen pb-20 flex flex-col justify-center items-center">
          <div className="w-screen flex flex-col justify-center items-center">
            <div className="absolute top-20 -left-2">
              <BackButton />
            </div>
            {!submitted && !loading && (
              <div className="mt-20 w-screen flex flex-col justify-center items-center">
                <h1 className="text-center text-5xl px-5 pt-10 leading-snug">
                  Please put your prompt below
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:w-[90vw] lg:w-[50vw] my-10 justify-center items-center">
                    <label hidden htmlFor="prompt" />
                    <div className="relative w-full mx-10 p-1 rounded-lg bg-gradient-to-r from-purple-500 to-rose-400">
                      <input
                        required
                        type="string"
                        id="prompt"
                        placeholder="Type your prompt in here and press 'generate'"
                        className="w-full p-4 text-black rounded-md focus:outline-none flex-grow"
                      />
                    </div>

                    <input hidden readOnly value={Date.now()} />

                    <div className="mt-5 p-1 bg-gradient-to-r from-purple-500 to-rose-400 rounded-lg hover:shadow-[-1px_1px_5px] hover:shadow-rose-300">
                      <button
                        type="submit"
                        className="inline-flex cursor-pointer items-center border-0 py-1 px-3 focus:outline-none rounded-md text-2xl md:mt-0 bg-gray-900"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {submitted && loading && (
              <div className="flex flex-col justify-center items-center">
                <h1 className="pb-10 text-3xl">Loading your prompt...</h1>
                <LoadingSpinner />
              </div>
            )}
            {submitted && !loading && (
              <div className="w-screen h-screen flex flex-col justify-center items-center text-white mt-32 mx-10">
                <h1 className="flex flex-wrap text-2xl mt-20">
                  This is your generated image
                </h1>
                <div
                  id={styles.imageContainer}
                  className="p-1 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-3/4 2xl:w-1/2 2xl:h-1/2 bg-gradient-to-r from-purple-500 to-rose-400 rounded-lg m-5"
                >
                  <img className="rounded-md w-full h-full" alt="Stable Diffusion Generated Image" width={100} src={picture} />
                </div>
                <div
                  id={styles.imageContainerRow}
                  className="w-full flex flex-row justify-center items-center"
                >
                  <div className="flex flex-row justify-center items-center w-[300px] max-w-[300px] p-1 bg-gradient-to-r from-purple-500 to-rose-400 rounded-lg hover:shadow-[-1px_1px_5px] hover:shadow-rose-300">
                    <button
                      onClick={handleNewPrompt}
                      className="w-full h-full cursor-pointer items-center border-0 py-1 px-3 focus:outline-none rounded-md text-2xl bg-gray-900"
                    >
                      Try Again
                    </button>
                  </div>
                  <ImageDownloadButton />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
