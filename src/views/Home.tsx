// React
import React from "react";

// Components
import Carousel from "../components/home/CarouselComponent";
import LatestPostsComponent from "../components/home/LatestPostsComponent";

const Home = () => {
  return (
    <div>
      <Carousel />
      <LatestPostsComponent />
    </div>
  );
};

export default Home;
