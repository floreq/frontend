import { newChartLabeling } from "./newChartLabeling";

// chartDataSample potrzebuje trzy wartosci (v - tablica z danymi, nameTag - nazwa wykresu, numberOfLabels - ilosc etykiet)
export const chartDataGenerator = (v, actualValue, nameTag, numberOfLabels) => {
  // Zwrocenie danych odpowiadajacych etykieta (np. dane z dnia 21.01.2019 odpowiadaja etykiecie 21.01.2019)
  let newConnection = actualValue;
  const returnDataCorrespondingToLabeling = newChartLabeling(
    numberOfLabels
  )[1].map(e => {
    // Zwrocenie 0 jezeli dane nie zawieraja etykiety
    for (let i = 0; i < v.length; i++) {
      if (v[i].actionDate === e) {
        newConnection -= v[i].sumMetalInStock;
        break;
      }
    }
    return newConnection;
  });
  console.log(returnDataCorrespondingToLabeling.reverse());
  const data = {
    labels: newChartLabeling(numberOfLabels)[0],
    datasets: [
      // Wykres pierwszy
      {
        label: nameTag,
        backgroundColor: "#e0fbfc",
        borderColor: "#98c1d9",
        data: returnDataCorrespondingToLabeling.reverse()
      }
    ]
  };
  return data;
};
