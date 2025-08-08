import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Development",
          "Quality Assurance & Testing",
          "Data Engineering & Analytics", 
          "Machine Learning & AI",
          "DevOps & Cloud Solutions",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
