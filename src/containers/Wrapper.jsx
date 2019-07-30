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
      workplaces: [],
      // Funkcja umozliwiajaca przeslanie wpisanego zadania
      postRequest: (enteredTask, workplaceId) => {
        fetch(`http://localhost:3001/tasks/${workplaceId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(enteredTask)
        })
          .then(response => response.json())
          .then(response => {
            this.setState(prevState => {
              const updatedTasks = response.concat(prevState.tasks);
              return {
                tasks: updatedTasks
              };
            });
          })
          .then(() => {
            fetch(`http://localhost:3001/workplaces/${workplaceId}`, {
              method: "GET"
            })
              .then(response => response.json())
              .then(response => {
                this.setState(prevState => {
                  prevState.workplaces[workplaceId - 1] = response;
                  return { workplaces: prevState.workplaces };
                });
              });
          });
      },
      deleteRequest: id => {
        fetch(`http://localhost:3001/tasks/${id}`, {
          method: "DELETE"
        })
          .then(response => response.json())
          .then(response => {
            this.setState({ tasks: response });
          });
      },
      workplaceRequest: id => {
        fetch(`http://localhost:3001/workplaces/${id}`, {
          method: "GET"
        })
          .then(response => response.json())
          .then(response => {
            this.setState(prevState => {
              prevState.workplaces[id - 1] = response;
              return { workplaces: prevState.workplaces };
            });
          });
      }
    };
  }

  componentDidMount() {
    // Pobranie danych z backendy
    fetch("http://localhost:3001/tasks")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(response => {
        this.setState({ tasks: response });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <Router>
        <Navbar workplaceRequest={this.state.workplaceRequest} />
        <Switch>
          <Route
            path="/workplace/:id"
            render={props => (
              <Workplace
                {...props} // Przekazanie wartosci /:id
                tasks={this.state.tasks}
                postRequest={this.state.postRequest}
                workplaceRequest={this.state.workplaceRequest}
                workplaceData={this.state.workplaces}
              />
            )}
          />
          {/* <Route exact path="/" component={Summary} /> */}
          <Route
            exact
            path="/"
            render={() => (
              <Summary
                tasks={this.state.tasks}
                deleteRequest={this.state.deleteRequest}
                workplaceData={this.state.workplaces}
              />
            )}
          />
          <Route
            path="/task-log"
            render={() => (
              <TaskLog
                tasks={this.state.tasks}
                deleteRequest={this.state.deleteRequest}
              />
            )}
          />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Wrapper;
