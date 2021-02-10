// React
import React from "react";

// Components
import PostCardComponent from "./PostCardComponent";

const posts = [
  {
    title: "Post 1",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
  {
    title: "Post 2",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
  {
    title: "Post 3",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
  {
    title: "Post 4",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
  {
    title: "Post 5",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
  {
    title: "Post 6",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
  {
    title: "Post 7",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
  {
    title: "Post 8",
    description: "My new post",
    image: "https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg",
  },
];

const LatestPostsComponent = () => {
  return (
    <div className="container-posts card-columns">
      {posts.map((post) => {
        return (
          <PostCardComponent
            key={post.title}
            title={post.title}
            description={post.description}
          />
        );
      })}
    </div>
  );
};

export default LatestPostsComponent;
