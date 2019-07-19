import React, { Component } from "react";
import { simpleChart } from "./../scripts/styleAreaChart";
import AreaChart from "./AreaChart";

class CashStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Dane potrzebne do wyswietlenia poprawnie wykresow
      data: {
        labels: ["05", "06", "07", "08", "09", "10"],
        datasets: [
          // Wykres pierwszy
          {
            label: "Stan kasy",
            backgroundColor: "#e0fbfc",
            borderColor: "#98c1d9",
            data: [2000, 2122.0, 5123.0, 3001.5, 4000.2, 4000.2]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <div className="border component">
          <div className="border-title-extended">
            <div>
              <h2>Stan kasy</h2>
              <h4>Obecnie</h4>
            </div>
            <div className="align-right">
              <h2>
                {this.props.sumIncome - this.props.sumExpense < 0
                  ? `- ${-(this.props.sumIncome - this.props.sumExpense)}`
                  : this.props.sumIncome - this.props.sumExpense}{" "}
                zł
              </h2>
            </div>
          </div>
          <AreaChart options={simpleChart.options} data={this.state.data} />
          <div className="border-title-extended border-top">
            <div>
              <h2>Wydatki</h2>
              <h4>Ostatnie 7 dni</h4>
            </div>
            <div className="align-right">
              <h2>- {this.props.sumExpenseLast7Days} zł</h2>
            </div>
          </div>
          <AreaChart options={simpleChart.options} data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default CashStatus;
