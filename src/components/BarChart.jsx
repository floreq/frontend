import React from "react";
import { Bar } from "react-chartjs-2";

// Komponent tworzacy wykres slupkowy
function BarChart(props) {
  return (
    <div className="right-chart">
      <Bar options={props.options} data={props.data} />
    </div>
  );
}

export default BarChart;
