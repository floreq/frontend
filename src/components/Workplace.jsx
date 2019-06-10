import React, { Component } from "react";
import Task from "./Task";
import Stock from "./Stock";
import TasksList from "./TasksList";
import CashStatus from "./CashStatus";
import Summary from "./Summary";

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
          <div>
            <Stock stock={this.state.stock} />
            <Summary />
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
