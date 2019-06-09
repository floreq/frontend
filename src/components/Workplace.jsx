import React, { Component } from "react";
import Task from "./Task";
import Stock from "./Stock";
import TasksList from "./TasksList";

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
          value: "1 343,202"
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

  handleTransfer(element) {
    this.setState({
      tasks: element
    });
  }

  render() {
    return (
      <div>
        <Task
          workplaceName={this.state.workplaceName}
          handleTransfer={this.handleTransfer}
        />
        <div className="two-columns">
          <Stock stock={this.state.stock} />
          <TasksList
            workplaceName={this.state.workplaceName}
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}

export default Workplace;
