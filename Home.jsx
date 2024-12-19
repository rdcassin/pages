import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Features";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
