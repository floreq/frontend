import {
  getFormattedDate,
  getFormattedMonthAndYear,
  getFormattedMonth,
  getFormattedDay
} from "../scripts/getFormattedDate";

export const newChartLabeling = numberOfLabels => {
  const shortLables = [];
  const longLables = [];
  const shortMonthLables = [];
  const longMonthLables = [];
  for (let i = 0; i < numberOfLabels; i++) {
    // np. 21.01.2019
    longLables.unshift(
      getFormattedDate(new Date(new Date().setDate(new Date().getDate() - i)))
    );
    // np. 21
    shortLables.unshift(
      getFormattedDay(new Date(new Date().setDate(new Date().getDate() - i)))
    );
    shortMonthLables.unshift(
      getFormattedMonth(
        new Date(new Date().setMonth(new Date().getMonth() - i))
      )
    );
    longMonthLables.unshift(
      getFormattedMonthAndYear(
        new Date(new Date().setMonth(new Date().getMonth() - i))
      )
    );
  }
  return [shortLables, longLables, shortMonthLables, longMonthLables];
};

// newChartLabeling(12)[0] zwraca "shortLables"
// newChartLabeling(12)[1] zwraca "longLables"
