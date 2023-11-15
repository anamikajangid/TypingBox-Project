import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TypingBox from "../components/Typingbox";

const HomePage = () => {
  return (
    <div className="canvas">
      <Header />
      <TypingBox />
      <Footer />
    </div>
  );
};

export default HomePage;
