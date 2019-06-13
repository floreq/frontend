import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class AreaChart extends Component {
  state = {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves
        }
      },
      scales: {
        xAxes: [
          {
            ticks: {
              padding: 9,
              fontFamily: "PT Sans",
              fontSize: 16,
              fontColor: "#b4b4b4",
              maxTicksLimit: 11
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              padding: 9,
              beginAtZero: true,
              fontFamily: "PT Sans",
              fontSize: 16,
              fontColor: "#b4b4b4",
              maxTicksLimit: 3
            }
          }
        ]
      }
    }
  };
  render() {
    return (
      <div className="right-chart">
        <Line options={this.state.options} data={this.props.data} />
      </div>
    );
  }
}

export default AreaChart;
