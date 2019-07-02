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
      ]
    };
  }

  render() {
    //console.log(this.props.match.params.id);
    return (
      <div>
        <Task
          workplaceName={this.state.workplaceName}
          handleTransfer={this.handleTransfer}
          postRequest={this.props.postRequest}
        />
        <div className="two-diffrent-columns">
          <div>
            <Stock stock={this.state.stock} />
            <WorkplaceSummary />
          </div>
          <div>
            <TasksList
              workplaceName={this.state.workplaceName}
              tasks={this.props.tasks}
            />
            <CashStatus />
          </div>
        </div>
      </div>
    );
  }
}

export default Workplace;
