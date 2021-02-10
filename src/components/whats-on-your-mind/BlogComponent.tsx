import React from "react";
import TextAreaComponent from "../common/TextAreaComponent";

const BlogComponent = () => {
  return (
    <div className="blog-component third-background">
      <div>
        <TextAreaComponent rows={9} placeholder="" />
      </div>
    </div>
  );
};

export default BlogComponent;
