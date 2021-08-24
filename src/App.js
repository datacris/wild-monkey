import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Links from "./components/Links";
import Layout from "./components/common/Layout";
import NotFound from "./components/common/NotFound";
import Home from "./components/Authentication/Home";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Layout>
      <div className="container p-4">
        <div className="row">
          <Router>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/links" component={Links} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
          <ToastContainer />
        </div>
      </div>
    </Layout>
  );
}

export default App;
