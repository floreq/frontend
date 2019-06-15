import React from "react";
import { Line } from "react-chartjs-2";

// Komponent tworzacy wykres liniowy z tlem pod spodem
function AreaChart(props) {
  return (
    <div className="right-chart">
      <Line options={props.options} data={props.data} />
    </div>
  );
}

export default AreaChart;
