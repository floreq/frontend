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
          metalInStock: [
            { metalTypeName: "kolorowy", sumMetalIncome: 0 },
            { metalTypeName: "stalowy", sumMetalIncome: 0 }
          ],
          metalInStockGroupByDay: [
            {
              correctDateFormat: "00.00.0000",
              actionDate: "00.00.0000",
              metalTypeName: "stalowy",
              sumMetalInStock: 0
            },
            {
              correctDateFormat: "00.00.0000",
              actionDate: "00.00.0000",
              metalTypeName: "kolorowy",
              sumMetalInStock: 0
            }
          ],
          originId: 0,
          cashStatus: 0,
          sumExpenseLast7Days: 0,
          expensesGroupByDay: [
            {
              actionDate: "00.00.0000",
              sumExpenses: 0
            }
          ],
          sumIncomeGroupByDay: [
            {
              actionDate: "00.00.0000",
              sumExpenses: 0
            }
          ],
          sumAdvancePaymentGroupByDay: [
            { actionDate: "00.00.0000", sumAdvancePayment: 0 }
          ]
        }
      ],
      id: 1,
      workplaceName: "Sklep 1"
    };
  }

  componentDidMount() {
    this.props.workplaceRequest(this.props.match.params.id);
  }

  render() {
    //console.log(this.props.workplaceData);
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
                  ? workplaceData.metalInStock
                  : this.state.workplaceSampleData[0].metalInStock
              }
            />
            <WorkplaceSummary
              workplaceData={
                workplaceData !== undefined
                  ? workplaceData
                  : this.state.workplaceSampleData[0]
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
              cashStatus={
                workplaceData !== undefined
                  ? workplaceData.cashStatus
                  : this.state.workplaceSampleData[0].cashStatus
              }
              sumExpenseLast7Days={
                workplaceData !== undefined
                  ? workplaceData.sumExpenseLast7Days
                  : this.state.workplaceSampleData[0].sumExpenseLast7Days
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Workplace;
