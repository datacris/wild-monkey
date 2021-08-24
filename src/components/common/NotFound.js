import React from "react";
import Image404 from "../../assets/images/404-error-not-found.png";
import "./styles.css";

function NotFound() {
  return (
    <div>
      <img src={Image404} className="not-found-img" alt="..." />
    </div>
  );
}

export default NotFound;
