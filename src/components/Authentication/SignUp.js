import React, { useState, useEffect } from "react";
import { authentication } from "../../firebase";
import { useHistory } from "react-router-dom";
//Redux imports
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../Contexts/User";

function SignUp() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // To handle user redirection without page refreshing
  const history = useHistory();

  //Getting user GLOBAL STATE values from REDUX
  const userState = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  /*
  const handleLogin = () => {
    clearErrors();
    authentication.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };
  */

  const handleSignUp = () => {
    clearErrors();
    authentication
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("This is the user:");
        console.log(user);
        dispatch(
          login({
            userEmail: user.email,
            userId: user.uid,
          })
        );
        clearInputs();
        history.push("/home");
      } else {
        setUser("");
        dispatch(logout());
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      <section className="login">
        <div className="loginContainer">
          <label htmlFor="">UserName</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMessage">{emailError}</p>
          <label htmlFor="">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMessage">{passwordError}</p>
          <div className="buttonContainer">
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an account?{" "}
                <span onClick={() => history.push("/signIn")}>Sign In</span>
              </p>
            </>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
