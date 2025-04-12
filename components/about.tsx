import React from "react";
import { WobbleCard } from "./wobble-cards";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-[30px] sm:px-[70px]"
      id="about"
    >
      <h1
        className="text-4xl lg:text-7xl flex animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        About &nbsp; <p className="text-[#ffd700]">Me</p>
      </h1>
      <br />
      <div className="grid grid-rows-2 gap-4 mx-auto w-full">
        <div className="grid grid-cols-1 gap-4 row-span-1 lg:grid-cols-3">
          <WobbleCard
            containerClassName="col-span-1 bg-pink-800 lg:h-[400px]"
            className=""
          >
            <div>
              <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                Study
              </h2>
              <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
                I am currently pursuing a degree in Electrical Engineering at
                the Indian Institute of Technology (IIT), Ropar. IIT Ropar is
                renowned for its rigorous academic curriculum, state-of-the-art
                research facilities, and a collaborative environment that
                fosters innovation and critical thinking.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 sm:h-[450px] md:h-[350px] lg:h-[400px]"
            className=""
          >
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              <div className="col-span-1 xl:col-span-2">
                <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                  AI/ML and Data Enthusiastic
                </h2>
                <p className="mt-4 text-sm xl:text-xl text-neutral-200 text-justify">
                I am AI Engineer and Data Scientist currently pursuing my B.Tech in Electrical Engineering at IIT Ropar. With a strong foundation in machine learning, deep learning, and data analysis,
                I specialize in transforming complex problems into innovative solutions. 
                My experience includes developing predictive models with 88%+ accuracy, 
                implementing AI-driven marketing campaigns that boosted brand awareness by 20%, 
                and creating data visualization tools for investment strategies.
                </p>
              </div>
              <div className="col-span-1 flex justify-end translate-x-20 translate-y-[-70px]">
                <Image
                  src="/robotics.jpg"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="filter sm:h-[480px] lg:h-[420px]  rounded-2xl hidden sm:flex "
                />
              </div>
            </div>
          </WobbleCard>
        </div>
        <div className="row-span-1">
          <WobbleCard containerClassName="col-span-1 bg-blue-900" className="">
            <div>
              <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                What I do?
              </h2>
              <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
              As an AI Engineer and Data Scientist currently pursuing Electrical Engineering at IIT Ropar, I combine strong technical skills in Python, machine learning (TensorFlow, Keras, LSTM models), and data analysis (Pandas, NumPy, Tableau) with hands-on experience in AI implementation. My internship at SOUL AI demonstrates my ability to enhance model accuracy by 10% and improve SQL task performance by 15%, while projects like my 88%-accurate stock prediction system showcase my problem-solving capabilities. With additional expertise in web development (WebSockets, APIs) and leadership roles across IIT Ropar technical clubs, I bring a unique blend of analytical rigor, technical versatility, and project management skills to develop innovative, data-driven solutions. My skill set spans the full spectrum from data processing to model deployment, complemented by strong competencies in market research and team collaboration.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default About;
