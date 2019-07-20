import { getFormattedDay } from "../scripts/getFormattedDate";

export const newChartLabeling = (givenData, numberOfLabels) => {
  console.log(givenData, numberOfLabels);
  const lables = [];
  for (let i = 0; i < numberOfLabels; i++) {
    lables.unshift(
      getFormattedDay(new Date(new Date().setDate(new Date().getDate() - i)))
    );
  }
  // const vData = lables.map(i => {
  //   if(givenData.actionDate.includes())

  // })
  return lables;
};
