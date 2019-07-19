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
      // Przykladowe dane workplaceData, zapobiega to migotaniu podczas czekania na pobranie danych
      workplaceSampleData: [
        {
          metalCollection: [
            { metalTypeName: "kolorowy", sumMetalIncome: 0 },
            { metalTypeName: "stalowy", sumMetalIncome: 0 }
          ],
          metalIncome: [
            { metalTypeName: "kolorowy", sumMetalIncome: 0 },
            { metalTypeName: "stalowy", sumMetalIncome: 0 }
          ],
          originId: 0,
          sumExpense: 0,
          sumExpenseLast7Days: 0,
          sumIncome: 0
        }
      ],
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

  componentDidMount() {
    this.props.workplaceRequest(this.props.match.params.id);
  }

  render() {
    console.log(this.props.workplaceData);
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
              stock={
                workplaceData !== undefined
                  ? workplaceData.metalIncome.length === 0
                    ? this.state.workplaceSampleData[0].metalIncome
                    : workplaceData.metalIncome
                  : this.state.workplaceSampleData[0].metalIncome
              }
            />
            <WorkplaceSummary />
          </div>
          <div>
            <TasksList
              workplaceId={this.props.match.params.id}
              workplaceName={this.state.workplaceName}
              tasks={this.props.tasks}
            />
            <CashStatus
              sumExpense={
                workplaceData !== undefined
                  ? workplaceData.sumExpense
                  : this.state.workplaceSampleData[0].sumExpense
              }
              sumExpenseLast7Days={
                workplaceData !== undefined
                  ? workplaceData.sumExpenseLast7Days
                  : this.state.workplaceSampleData[0].sumExpenseLast7Days
              }
              sumIncome={
                workplaceData !== undefined
                  ? workplaceData.sumIncome
                  : this.state.workplaceSampleData[0].sumIncome
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Workplace;
