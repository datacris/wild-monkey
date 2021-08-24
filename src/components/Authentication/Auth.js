import React from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire"

function Auth(props) {
  return (
    <div>
      <label htmlFor="email">Correo</label>
      <input type="email" id="email" />
      <label htmlFor="password"></label>
      <input type="password" id="password" />
      <button>Iniciar sesion</button>
    </div>
  );
}

export default Auth;
