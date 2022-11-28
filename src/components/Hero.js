import React from "react";

import HeroImg from "../images/illustration-working.svg";

import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero__left">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          onClick={() => {
            document
              .getElementById("searchBar")
              .scrollIntoView({ block: "center" });
          }}
        >
          Get Started
        </button>
      </section>
      <section className="hero__right">
        <img src={HeroImg} alt="" />
      </section>
    </div>
  );
};

export default Hero;
