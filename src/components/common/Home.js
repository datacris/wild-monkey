import React from "react";
import image from "../../assets/images/home-img.jpg";

function Home() {
  const features = [
    "Firebase Authentication",
    "LocaStorage",
    "Bootswatch",
    "FireStore",
    "CRUD functionality ",
    "Alerts Toastify",
  ];
  return (
    <>
      <div className="col-md-4 p-4">
        <h2>Wild Monkey App</h2>
        <p>This web application has the following features and technologies</p>
        <ul>
          {features.map((feature) => {
            return <li>{feature}</li>;
          })}
        </ul>
      </div>
      <div className="col-md-8 p-4">
        <img
          className="main-image-custom w3-center w3-animate-left"
          src={image}
          alt="MDN"
        />
      </div>
    </>
  );
}

export default Home;
