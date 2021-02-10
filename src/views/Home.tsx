// React
import React from "react";

// Components
import Carousel from "../components/home/CarouselComponent";
import LatestPostsComponent from "../components/home/LatestPostsComponent";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <LatestPostsComponent />
      </div>
    </div>
  );
};

export default Home;
