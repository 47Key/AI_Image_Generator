import React from 'react';
import { FaBrain } from 'react-icons/fa';
import { VscCircuitBoard } from 'react-icons/vsc';
import { BsCardImage } from 'react-icons/Bs';
// import { GiBrain } from "react-icons/gi";


// const cardData = [
//     {
//         title: "AI Image Generation",
//         description: "AI image generation through the Stability-AI sdk, I made a REST API to enable the use of the Stability-sdk in the cloud, which allows you to query the "
//     },
//     {
//         title: "Image to Image",
//         description: "Image to Image generation is a feature I am in the process of adding, this will hopefully be added in the next month",
//     },
//     {
//         title: "Text Generation Coming Soon",
//         description: "We are currently implementing text generation with help for writing articles, blog posts, and essays. Assisting you when you have writer's block or get stuck on a sentence, our AI will play an important role with overcoming these mental roadblocks"}
// ];

const About = () => {
    return (  
        <section className="text-white body-font">
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full mt-20 w-1 bg-white pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 p-0.5 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-rose-400 text-white relative right-1 z-10 title-font font-medium text-lg">
                <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full">
                    1
                </div>
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 p-0.5 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full inline-flex items-center justify-center">
                    <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full text-white">
                        <FaBrain size={65} />
                    </div>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold mb-1 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">The Idea</h2>
                  <p className="leading-relaxed">Image generation starts with your idea, and is only limited by your imagination.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-white pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 p-0.5 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-rose-400 text-white relative right-1 z-10 title-font font-medium text-lg">
                <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full">
                    2
                </div>
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 p-0.5 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full inline-flex items-center justify-center">
                    <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full text-white">
                        <VscCircuitBoard size={60} />
                    </div>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold mb-1 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">The Synthesis</h2>
                  <p className="leading-relaxed">The process of image generation is complex, but luckily we've handled things in the background.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 mb-40 bg-white pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 p-0.5 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-rose-400 text-white relative right-1 z-10 title-font font-medium text-lg">
                <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full">
                    3
                </div>
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 p-0.5 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full inline-flex items-center justify-center">
                    <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full text-white">
                        <BsCardImage size={60} />
                    </div>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-bold mb-1 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">The Extraction</h2>
                  <p className="leading-relaxed">Where your idea comes to life. Display, download, or share your image to view later.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default About;
