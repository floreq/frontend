import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Workplace from "./Workplace";
import Summary from "./Summary";
import TaskLog from "./TaskLog";
import Footer from "../components/Footer";
import ErrorNotFound from "./ErrorNotFound";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      // Funkcja umozliwiajaca przeslanie wpisanego zadania
      postRequest: enteredTask => {
        fetch("http://localhost:3001/tasks", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(enteredTask)
        })
          .then(response => response.json())
          .then(response => {
            this.setState({ tasks: response });
          });
      }
    };
  }

  componentDidMount() {
    // Pobranie danych z backendy
    fetch("http://localhost:3001/tasks")
      .then(response => response.json())
      .then(response => {
        this.setState({ tasks: response });
      });
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/workplace/:id"
            render={() => (
              <Workplace
                tasks={this.state.tasks}
                postRequest={this.state.postRequest}
              />
            )}
          />
          {/* <Route path="/workplace/:id" component={Workplace} /> */}
          <Route exact path="/" component={Summary} />
          <Route
            path="/task-log"
            render={() => <TaskLog tasks={this.state.tasks} />}
          />
          {/* <Route path="/task-log" component={TaskLog} /> */}
          <Route path="*" component={ErrorNotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Wrapper;
