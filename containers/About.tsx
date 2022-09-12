import React from 'react';
import { FaBrain } from 'react-icons/fa';
import { VscCircuitBoard } from 'react-icons/vsc';
import { BsCardImage } from 'react-icons/Bs';

const About = () => {
    return (  
        <section className="text-white body-font">
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full mt-20 w-1 bg-white pointer-events-none"></div>                 
              </div>
              <div className="flex-shrink-0 p-[3px] w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-rose-400 text-white relative right-1 z-10 title-font font-medium text-lg">
                <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full">
                    1
                </div>
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 p-[5px] bg-gradient-to-r from-purple-500 to-rose-500 rounded-full inline-flex items-center justify-center">
                    <div className="flex justify-center z-10 items-center w-full h-full bg-gray-900 rounded-full text-white">
                        <FaBrain size={65} />
                    </div>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold mb-1 text-4xl text-white">The Idea.</h2>
                  <p className="leading-relaxed text-xl">Image generation starts with your idea, and is only limited by your imagination</p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full mt-20 w-1 bg-white pointer-events-none"></div>                 
              </div>
              <div className="flex-shrink-0 p-[3px] w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-rose-400 text-white relative right-1 z-10 title-font font-medium text-lg">
                <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full">
                    2
                </div>
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 p-[5px] bg-gradient-to-r from-purple-500 to-rose-500 rounded-full inline-flex items-center justify-center">
                    <div className="flex justify-center z-10 items-center w-full h-full bg-gray-900 rounded-full text-white">
                        <VscCircuitBoard size={60} />
                    </div>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold mb-1 text-4xl text-white">The Synthesis.</h2>
                  <p className="leading-relaxed text-xl">The process of image generation is complex, but luckily we've handled things in the background</p>
                </div>
              </div>
            </div>
            
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full -mt-44 w-1 bg-white pointer-events-none"></div>                 
              </div>
              <div className="flex-shrink-0 p-[3px] w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-rose-400 text-white relative right-1 z-10 title-font font-medium text-lg">
                <div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-full">
                    3
                </div>
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 p-[5px] bg-gradient-to-r from-purple-500 to-rose-500 rounded-full inline-flex items-center justify-center">
                    <div className="flex justify-center z-10 items-center w-full h-full bg-gray-900 rounded-full text-white">
                        <BsCardImage size={60} />
                    </div>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-bold mb-1 text-4xl text-white">The Extraction.</h2>
                  <p className="leading-relaxed text-xl">Where your idea comes to life. Display, download, or share your image to view later</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default About;
