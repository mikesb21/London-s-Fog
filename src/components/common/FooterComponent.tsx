// React
import React from "react";

const FooterComponent = () => {
  return (
    <div className="footer text-center navbar-light bg-light p-3">
      {"© " + new Date().getFullYear() + " Copyright: "}
      <a
        className="text-info"
        href="https://github.com/mikesb21"
        target="__blank"
      >
        @mikesb21
      </a>
    </div>
  );
};

export default FooterComponent;
