import React, { Component } from "react";
import Task from "../components/Task";
import Stock from "../components/Stock";
import TasksList from "../components/TasksList";
import CashStatus from "../components/CashStatus";
import WorkplaceSummary from "../components/WorkplaceSummary";

class Workplace extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      workplaceName: "Sklep 1",
      stock: [
        {
          id: 1,
          name: "Złom stalowy",
          shortname: "St",
          value: "1343,202"
        },
        {
          id: 2,
          name: "Metal kolorowy",
          shortname: "Kl",
          value: "231,120"
        }
      ],
      tasks: []
    };
    this.handleTransfer = this.handleTransfer.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/tasks")
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        this.setState({ tasks: response });
      });
  }

  handleTransfer(element) {
    this.setState(prevState => {
      const newTaskEntry = element;
      const tasksList = prevState.tasks;
      tasksList.unshift(newTaskEntry);
      return {
        tasks: tasksList
      };
    });
  }

  render() {
    //console.log(this.props.match.params.id);
    return (
      <div>
        <Task
          workplaceName={this.state.workplaceName}
          handleTransfer={this.handleTransfer}
        />
        <div className="two-diffrent-columns">
          <div>
            <Stock stock={this.state.stock} />
            <WorkplaceSummary />
          </div>
          <div>
            <TasksList
              workplaceName={this.state.workplaceName}
              tasks={this.state.tasks}
            />
            <CashStatus />
          </div>
        </div>
      </div>
    );
  }
}

export default Workplace;
