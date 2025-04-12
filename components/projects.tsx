"use client";

import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Multi-Agent Retrieval-Augmented Generation (MARAG) System",
    image: "/Projects/MARAG.png",
    description: "Inter-IIT Tech Meet 13.0 Submission.",
    link: "https://github.com/SumitBahl02/MARAG.git",
  },
  {
    title: "Autonomous-RAG-for-Financial-Analysis-Full-Stack",
    image: "/Projects/AURA.png",
    description: "Multi-Agent Retrieval-Augmented Generation (MARAG) platform designed to transform financial data analysis.",
    link: "https://github.com/SumitBahl02/Autonomous-RAG-for-Financial-Analysis-Full-Stack.git",
  },
  {
    title: "Stock Price Prediction Using LSTM",
    image: "/Projects/LSTM.png",
    description: "This project uses a Long Short-Term Memory (LSTM) neural network to predict stock prices based on historical data. The dataset employed in this project is for TATA Global stock prices.",
    link: "https://github.com/SumitBahl02/Stock-Predicitor-Using-LSTM.git",
  },
  {
    title: "Data Science Project Collection ",
    image: "/Projects/datascience.png",
    description: "Movie Rating Prediction, Sales Prediction, and Titanic Survival Prediction",
    link: "https://github.com/SumitBahl02/Encryptix..git",
  },
  {
    title: "Stock Market Analysis",
    image: "/Projects/stockmarket.png",
    description: "This project offers a comprehensive analysis of stock market data using Python. It focuses on identifying monthly high and low prices over multiple years and visualizing financial trends to aid in smarter investment decision-making.",
    link: "https://github.com/SumitBahl02/Stock_Market_Analysis.git",
  },
  // {
  //   title: "5 stage MIP32 Processor",
  //   image: "/Projects/2.png",
  //   description: "Processor based on MIP32 Instruction Set Architecture(ISA).",
  //   link: "https://github.com/navnoorsingh0309/MIP32_Pipelined_Processor",
  // },
  // {
  //   title: "Adelaar",
  //   image: "/Projects/Adelaar.jpeg",
  //   description: "RC Plane.",
  //   link: "/",
  // },

  // {
  //   title: "JLR Chiplet Challenge",
  //   image: "/Projects/jlr.jpeg",
  //   description: "JLR Submission in Inter IIT Tech 12.0.",
  //   link: "/",
  // },
  // {
  //   title: "BOAA Website",
  //   image: "/Projects/3.jpeg",
  //   description: "Site of Board of Academic Affairs, IIT Ropar",
  //   link: "https://iitrpr.ac.in/boaa",
  // },
  {
    title: "Omni wheel",
    image: "/Projects/omni.jpg",
    description: "Omni Wheel using mecanum wheels.",
    link: "/",
  },
  {
    title: "Gesture Controller Car",
    image: "/Projects/gesture control.jpg",
    description: "Car controlled using gesture of hand",
    link: "/",
  },
  {
    title: "Hovercraft",
    image: "/Projects/Hovercraft.jpg",
    description: "Bluetooth controller hovercraft.",
    link: "/",
  },
];

const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-[30px] sm:px-[70px] pt-[100px]"
      id="projects"
    >
      <h1
        className="text-4xl lg:text-7xl flex animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        My &nbsp; <p className="text-[#ffd700]">Projects</p>
      </h1>
      {/* <div className="flex flex-wrap items-center justify-center"> */}
      <HoverEffect items={projects} />
      {/* </div> */}
    </section>
  );
};

export default Projects;
