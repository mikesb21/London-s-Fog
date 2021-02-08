// React
import React from "react";

const FooterComponent = () => {
  return (
    <div className="footer text-center secondary-background primary-text p-3">
      {"© " + new Date().getFullYear() + " Copyright: "}
      <a
        className="secondary-text"
        href="https://github.com/mikesb21"
        target="__blank"
      >
        @mikesb21
      </a>
    </div>
  );
};

export default FooterComponent;
