// Wykresy z biblioteki chart.js
// Dokumentacja https://www.chartjs.org/docs/latest/

// Ustawienia wykresow
const chartVariables = {
  displayLegend: false,
  fontFamily: "PT Sans",
  fontSize: 16,
  fontColor: "#b4b4b4",
  padding: 9,

  gridLinesColor: "#e8e8e8",
  gridLineWidth: 2,
  zeroLineColor: "#e8e8e8",
  zeroLineWidth: 2,

  responsive: true,
  maintainAspectRatio: false,
  tension: 0, // Zaokroglanie wieszcholkow
  beginAtZero: true
};

export const simpleChart = {
  options: {
    responsive: chartVariables.responsive,
    maintainAspectRatio: chartVariables.maintainAspectRatio,
    legend: {
      display: chartVariables.displayLegend
    },
    elements: {
      line: {
        tension: chartVariables.tension
      }
    },
    scales: {
      xAxes: [
        {
          ticks: {
            padding: chartVariables.padding,
            fontFamily: chartVariables.fontFamily,
            fontSize: chartVariables.fontSize,
            fontColor: chartVariables.fontColor,
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
            padding: chartVariables.padding,
            beginAtZero: chartVariables.beginAtZero,
            fontFamily: chartVariables.fontFamily,
            fontSize: chartVariables.fontSize,
            fontColor: chartVariables.fontColor,
            maxTicksLimit: 3
          }
        }
      ]
    }
  }
};

export const chartWithBorder = {
  options: {
    responsive: chartVariables.responsive,
    maintainAspectRatio: chartVariables.maintainAspectRatio,
    legend: {
      display: chartVariables.displayLegend
    },
    elements: {
      line: {
        tension: chartVariables.tension
      }
    },
    scales: {
      xAxes: [
        {
          ticks: {
            padding: chartVariables.padding,
            fontFamily: chartVariables.fontFamily,
            fontSize: chartVariables.fontSize,
            fontColor: chartVariables.fontColor,
            maxTicksLimit: 31
          },
          gridLines: {
            lineWidth: chartVariables.gridLineWidth,
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: chartVariables.gridLineWidth,
            color: chartVariables.gridLinesColor,
            zeroLineWidth: chartVariables.zeroLineWidth,
            zeroLineColor: chartVariables.zeroLineColor,
            display: true,
            drawTicks: false,
            drawBorder: false
          },
          ticks: {
            padding: 20,
            beginAtZero: chartVariables.beginAtZero,
            fontFamily: chartVariables.fontFamily,
            fontSize: chartVariables.fontSize,
            fontColor: chartVariables.fontColor,
            maxTicksLimit: 2
          }
        }
      ]
    }
  }
};
