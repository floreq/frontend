import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Workplace from "./../components/Workplace";
import Summary from "./../components/Summary";
import TaskLog from "../components/TaskLog";
import Footer from "./../components/Footer";

function Wrapper() {
  return (
    <Router>
      <Navbar />
      <Route path="/workplace/:id" component={Workplace} />
      <Route exact path="/" component={Summary} />
      <Route path="/task-log" component={TaskLog} />
      <Footer />
    </Router>
  );
}

export default Wrapper;
