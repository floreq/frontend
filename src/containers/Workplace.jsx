import React, { Component } from "react";
import Task from "../components/Task";
import Stock from "../components/Stock";
import TasksList from "../components/TasksList";
import CashStatus from "../components/CashStatus";
import WorkplaceSummary from "../components/WorkplaceSummary";
import { workplaceSampleData } from "../scripts/workplaceSampleData";

class Workplace extends Component {
  constructor() {
    super();
    this.state = {
      workplaceName: "Sklep"
    };
  }

  componentDidMount() {
    this.props.workplaceRequest(this.props.match.params.id);
  }

  render() {
    // Odebranie odpowiednich danych z komponentu Wrapper
    const workplaceData = this.props.workplaceData[
      this.props.match.params.id - 1
    ];
    return (
      <div>
        <Task
          workplaceId={this.props.match.params.id}
          workplaceName={this.state.workplaceName}
          handleTransfer={this.handleTransfer}
          postRequest={this.props.postRequest}
        />
        <div className="two-diffrent-columns">
          <div>
            <Stock
              workplaceData={
                workplaceData !== undefined
                  ? workplaceData
                  : workplaceSampleData[0]
              }
            />
            <WorkplaceSummary
              workplaceData={
                workplaceData !== undefined
                  ? workplaceData
                  : workplaceSampleData[0]
              }
            />
          </div>
          <div>
            <TasksList
              workplaceId={this.props.match.params.id}
              workplaceName={this.state.workplaceName}
              tasks={this.props.tasks}
            />
            <CashStatus
              workplaceData={
                workplaceData !== undefined
                  ? workplaceData
                  : workplaceSampleData[0]
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Workplace;
