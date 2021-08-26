import React, { useState, useEffect } from "react";
import { authentication } from "../../firebase";
import { useHistory } from "react-router-dom";
//Redux imports
import { useDispatch } from "react-redux";
import { login, logout } from "../Contexts/User";

import { toast } from "react-toastify";

const SignIn = () => {
  //const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // To handle user redirection without page refreshing
  const history = useHistory();

  const dispatch = useDispatch();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authentication.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          toast("Email: " + err.message, {
            type: "error",
            autoClose: 2000,
          });
          break;
        case "auth/wrong-password":
          toast("Password: " + err.message, {
            type: "error",
            autoClose: 2000,
          });
          break;
        default:
          toast("There was an error: ", err.message, {
            type: "error",
            autoClose: 2000,
          });
          break;
      }
    });
  };

  const authListener = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        //setUser(user);
        dispatch(
          login({
            userEmail: user.email,
            userId: user.uid,
          })
        );
        localStorage.setItem("userEmail", JSON.stringify(user.email));
        localStorage.setItem("userId", JSON.stringify(user.uid));
        clearInputs();
        history.push("/home");
      } else {
        //setUser("");
        dispatch(logout());
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <>
      <div className="col-md-3 p-2"></div>

      <div className="col-md-5 p-2">
        <form className="card card-body border-primary">
          <h2 className="align-items-center">Sign In </h2>

          <div className="form-group input-group mb-3 mt-2">
            <div className="input-group-text bg-light">
              <i className="material-icons">account_circle</i>
            </div>
            <input
              type="text"
              className="form-control"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="form-group input-group mb-3">
            <div className="input-group-text bg-light">
              <i className="material-icons">vpn_key</i>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              className="form-control"
            />
          </div>

          <button
            className="btn btn-primary btn-block mt-4 mb-3"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <p>
            Dont have an account?{"  "}
            <span onClick={() => history.push("/signUp")}>Sign up</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
