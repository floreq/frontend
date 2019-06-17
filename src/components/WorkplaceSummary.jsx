import React, { Component } from "react";
import { chartWithBorder } from "../scripts/styleAreaChart";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import SortingSelection from "./SortingSelection";

class WorkplaceSummary extends Component {
  constructor() {
    super();
    this.state = {
      // Dane potrzebne do wyswietlenia poprawnie wykresow
      stockData: {
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
      },
      barChart: {
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
            {
              label: "Stan kasy",
              backgroundColor: "#e0fbfc",
              borderColor: "#98c1d9",
              borderWidth: 3,
              hoverBorderColor: "#98c1d9",
              hoverBorderWidth: 3,
              data: [2000.123, 2122.651, 5123.12, 3001.251, 4000.783, 4000.0]
            }
          ]
        }
      }
    };
  }
  render() {
    return (
      <div className="component">
        <h4>Podsumowanie</h4>
        <div className="border summary">
          <div className="two-diffrent-columns-reverse">
            <h3>Złom stalowy</h3>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.stockData.data}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <h3>Metal kolorowy</h3>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.stockData.data}
            />
          </div>
        </div>
        <div className="border summary component">
          <div className="two-diffrent-columns-reverse">
            <div>
              <h3>Zaliczka</h3>
              <SortingSelection />
            </div>
            <BarChart
              options={chartWithBorder.options}
              data={this.state.barChart.data}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <div>
              <h3>Wpływy</h3>
              <SortingSelection />
            </div>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.stockData.data}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <div>
              <h3>Wydatki</h3>
              <SortingSelection />
            </div>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.stockData.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkplaceSummary;
