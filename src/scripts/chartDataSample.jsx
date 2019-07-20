import { newChartLabeling } from "../scripts/newChartLabeling";

export const chartDataSample = v => {
  //console.log("chart", v);
  const data = {
    labels: newChartLabeling(12),
    datasets: [
      // Wykres pierwszy
      {
        label: "Stan kasy",
        backgroundColor: "#e0fbfc",
        borderColor: "#98c1d9",
        data: v
      }
    ]
  };
  return data;
};
