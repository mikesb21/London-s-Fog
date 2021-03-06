// React
import React from "react";
import { Link } from "react-router-dom";

const PostCardComponent = (props: any) => {
  return (
    <div className="card card-small forth-background">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to="/" className="btn btn-info secondary-text">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default PostCardComponent;
