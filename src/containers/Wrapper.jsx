import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Workplace from "./Workplace";
import Summary from "./Summary";
import TaskLog from "./TaskLog";
import Footer from "../components/Footer";
import ErrorNotFound from "./ErrorNotFound";

function Wrapper() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/workplace/:id" component={Workplace} />
        <Route exact path="/" component={Summary} />
        <Route path="/task-log" component={TaskLog} />
        <Route path="*" component={ErrorNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Wrapper;
