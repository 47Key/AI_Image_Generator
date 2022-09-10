import React from "react";
import styles from '../styles/Home.module.css';
import { SiMagento } from 'react-icons/si';

const FAQ = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center overflow-hidden pb-16">
        <h1 id={styles.heroText} className="text-5xl p-10 text-center leading-snug font-extrabold text-white">
          Frequently Asked Questions.
        </h1>
      <div id={styles.faqContainer} className="text-center space-y-4 flex flex-col h-full w-[50vw] justify-center items-center">
        <div className="w-full p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-rose-400 ">
          <details className="group">
            <summary
              className="flex items-center justify-between p-4 rounded-[11px] cursor-pointer bg-gray-900"
            >
              <h5 className="text-white font-extrabold">
                What is AI Image Generation/Stable Diffusion?
              </h5>
                <SiMagento size={20} />
            </summary>
            <div className="bg-gray-900 rounded-xl">
              <p className="px-4 -mt-5 py-10 leading-relaxed text-white">
                AI Image generation is a tool that allows you to generate images from text inputs, 
                it allows you to turn your thoughts into a real image, regardless of traditional 
                artistic skills. 

                Stable Diffusion is a type of AI Image generation, it uses a latent diffusion model 
                to transform text into images. It can also generate images based off of an image input  
                and text guidance. Which is a feature we are implementing soon.
              </p>
            </div>
          </details>
        </div>

        <div className="w-full p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-rose-400 ">
          <details className="group">

            <summary
              className="flex items-center justify-between p-4 rounded-[11px] cursor-pointer bg-gray-900"
              >
              <h5 className="font-extrabold text-white pr-5 ">
                Is this service free?
              </h5>
              <SiMagento size={20} />
            </summary>

            <div className="bg-gray-900 rounded-xl">
              <p className="px-4 -mt-5 py-10 leading-relaxed text-white">
                Yes it is free ! This link has only been shared with close friends and family, 
                as well as potential employers of the developer. This website will soon require 
                authentication and an account to use freely. For the time being it is completely free!

                I want to make sure everyone gets the chance at using this technology, and understand the 
                future impact that these tools can have on humanity. AI is on the precipice of *magic* 
                and human ingenuity.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
