import React from "react";
import profileImage from "../media/prokbuns.jpg";
import Navigation from "./Navigation";

export default function BioSection() {
  return (
    <div className="md:w-1/2  w-full h-full flex flex-col  items-center py-10 px-20 text-center">
      {/* Profile GIF */}
      <img
        src={profileImage}
        alt="Jordan Moureau Full-Stack Dev"
        className="shadow-lg w-60 h-60 object-cover rounded-full mx-auto aspect-square"
      />

      {/* Name & Title */}
      <h1 className="text-3xl font-bold text-accent mt-8">Jordan Moureau</h1>
      <h2 className="text-l font-bold text-accent mb-3">
        Full-Stack Developer
      </h2>
      <p className=" text-accent">
        Hey, I'm Jordan 👩🏻‍💻✨ a full-stack nerd who loves building projects bit
        by frustrating bit. I'm best at front-end, my skill stack leans heavily
        on React, Next JS and Tailwind, with just enough back-end to make things
        work the way I want them to. <br /> <br />
        If I'm not coding, I'm probably lifting heavy, hiking in the wild, or
        oding on boba & pork buns while noodling about my next project. Let’s
        build something! ⚡️🫶🏻
      </p>

      <Navigation />
    </div>
  );
}
