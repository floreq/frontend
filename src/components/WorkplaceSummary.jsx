import React, { Component } from "react";
import { chartWithBorder } from "../scripts/styleAreaChart";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import { selectDayPeriod } from "./SortingTypes";
import { chartDataGenerator } from "../scripts/chartDataGenerator";
import { newChartLabeling } from "../scripts/newChartLabeling";

class WorkplaceSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Dane potrzebne do wyswietlenia poprawnie wykresow
      stockData: {
        data: {
          labels: newChartLabeling(12)[0],
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
          labels: newChartLabeling(12)[0],
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
    // console.log(
    //   this.props.stock.filter(i => i.metalTypeName === "stalowy")[0]
    //     .sumMetalIncome
    // );
    return (
      <div className="component">
        <h4>Podsumowanie</h4>
        <div className="border summary">
          <div className="two-diffrent-columns-reverse">
            <h3>Złom stalowy</h3>
            <AreaChart
              options={chartWithBorder.options}
              data={chartDataGenerator(
                this.props.stockByDays.filter(
                  item => item.metalTypeName === "stalowy"
                ),
                this.props.stock.filter(i => i.metalTypeName === "stalowy")[0]
                  .sumMetalIncome,
                "Złom stalowy",
                12
              )}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <h3>Metal kolorowy</h3>
            <AreaChart
              options={chartWithBorder.options}
              data={chartDataGenerator(
                this.props.stockByDays.filter(
                  item => item.metalTypeName === "kolorowy"
                ),
                this.props.stock.filter(i => i.metalTypeName === "kolorowy")[0]
                  .sumMetalIncome,
                "Metal kolorowy",
                12
              )}
            />
          </div>
        </div>
        <div className="border summary component">
          <div className="two-diffrent-columns-reverse">
            <div>
              <h3>Średnia</h3>
              <h4>Ilość przez kwota</h4>
            </div>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.stockData.data}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <div>
              <h3>Zaliczka</h3>
              {selectDayPeriod}
            </div>
            <BarChart
              options={chartWithBorder.options}
              data={this.state.barChart.data}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <div>
              <h3>Wpływy</h3>
              {selectDayPeriod}
            </div>
            <AreaChart
              options={chartWithBorder.options}
              data={this.state.stockData.data}
            />
          </div>
          <div className="two-diffrent-columns-reverse">
            <div>
              <h3>Wydatki</h3>
              {selectDayPeriod}
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
