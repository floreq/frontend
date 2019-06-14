import React, { Component } from "react";
import { chartWithBorder } from "./../scripts/styleAreaChart";
import AreaChart from "./AreaChart";

class ShortSummary extends Component {
  constructor() {
    super();
    this.state = {
      // Dane potrzebne do wyswietlenia poprawnie wykresow
      data: {
        labels: [
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16"
        ],
        datasets: [
          // Wykres pierwszy
          {
            label: "Stan kasy",
            backgroundColor: "#e0fbfc",
            borderColor: "#98c1d9",
            data: [2000.123, 2122.651, 5123.12, 3001.251, 4000.783, 4000.0]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="component">
        <h4>Podsumowanie</h4>
        <div className="border summary">
          <div className="two-diffrent-columns-reverse">
            <h1>Złom stalowy</h1>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.data}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <h1>Metal kolorowy</h1>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShortSummary;
