import React, { Component } from "react";
import AreaChart from "./AreaChart";

class CashStatus extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: ["05", "06", "07", "08", "09", "10"],
        datasets: [
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
              <h4>obecnie</h4>
            </div>
            <div className="align-right">
              <h2>12345,10 zł</h2>
              <h4>+ 1230,00 zł</h4>
            </div>
          </div>
          <AreaChart data={this.state.data} options={this.state.options} />
          <br />
          <br />
          <div className="border-title-extended">
            <div>
              <h2>Wydatki</h2>
              <h4>łącznie</h4>
            </div>
            <div className="align-right">
              <h2>- 6012,90 zł</h2>
              <h4>- 120,90 zł</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CashStatus;
