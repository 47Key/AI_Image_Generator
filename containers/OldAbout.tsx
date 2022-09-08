import React from 'react'
import Card from '../components/Card';

const cardData = [
    {
        title: "AI Image Generation",
        description: "AI image generation through the Stability-AI sdk, I made a REST API to enable the use of the Stability-sdk in the cloud, which allows you to query the "
    },
    {
        title: "Image to Image",
        description: "Image to Image generation is a feature I am in the process of adding, this will hopefully be added in the next month",
    },
    {
        title: "Text Generation Coming Soon",
        description: "We are currently implementing text generation with help for writing articles, blog posts, and essays. Assisting you when you have writer's block or get stuck on a sentence, our AI will play an important role with overcoming these mental roadblocks"}
];

const About = () => {
    return (
        <section className="w-screen h-full justify-center items-center text-white">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-blue-400 to-purple-500">
                Our Features.
                </h1>
                <div className="flex flex-row flex-wrap justify-evenly items-center pt-10 ">
                    {
                        cardData.map((value, key) => {
                            return (
                                    <Card key={key} title={value.title} description={value.description} />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default About;
