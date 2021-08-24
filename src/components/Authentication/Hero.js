import React from "react";

function Hero({ handleLogout }) {
  return (
    <div>
      <h2>Welcome</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Hero;
