import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import DemoCarousel from "./DemoCarousel";

function Home() {
  return (
    <>
      <DemoCarousel />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
