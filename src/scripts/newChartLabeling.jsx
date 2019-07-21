import { getFormattedDate, getFormattedDay } from "../scripts/getFormattedDate";

export const newChartLabeling = numberOfLabels => {
  const shortLables = [];
  const longLables = [];
  for (let i = 0; i < numberOfLabels; i++) {
    // np. 21.01.2019
    longLables.unshift(
      getFormattedDate(new Date(new Date().setDate(new Date().getDate() - i)))
    );
    // np. 21
    shortLables.unshift(
      getFormattedDay(new Date(new Date().setDate(new Date().getDate() - i)))
    );
  }
  return [shortLables, longLables];
};

// newChartLabeling(12)[0] zwraca "shortLables"
// newChartLabeling(12)[1] zwraca "longLables"
