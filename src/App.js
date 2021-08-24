import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Links from "./components/Links";
import Layout from "./components/common/Layout";
import NotFound from "./components/common/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Layout>
      <div className="container p-4">
        <div className="row">
          <Router>
            <Switch>
              <Route exact={true} path="/" component={Links} />
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
