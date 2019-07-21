import { newChartLabeling } from "./newChartLabeling";

// Important! correctDateFormat jest potrzebny do ustalenia kolejnosci czasowej

// chartDataSample potrzebuje czterech wartosci:
// v - tablica z danymi, actualValue - aktualny stan magazynu, nameTag - nazwa wykresu, numberOfLabels - ilosc etykiet
export const chartDataGenerator = (v, actualValue, nameTag, numberOfLabels) => {
  // Przyporzadkowanie danych do odpowiadajacej etykiety (np. dane z dnia 21.01.2019 odpowiadaja etykiecie 21.01.2019)
  let stock = actualValue; // Przechowanie stanu magazynu w danym czasie
  let prevValue = 0; // Przechowanie ile w danym dniu jest materialu
  console.log(v);
  // Przyporzadkowanie danych do odpowiadajacej etykiety (np. dane z dnia 21.01.2019 odpowiadaja etykiecie 21.01.2019)
  // Znany calkowity stan magazynu i ilosc materialu "zakuiponego" w dany dzien.
  // Odejmowanie od calkowietego stanu magazynu i ilosci materialu
  const returnDataCorrespondingToLabeling = newChartLabeling(numberOfLabels)[1]
    .reverse()
    .map(e => {
      // Przypisywanie, mapowanie ilosci materialu do etykiet
      for (let i = 0; i < v.length; i++) {
        if (v[i].actionDate === e) {
          stock -= prevValue;
          prevValue = v[i].sumMetalInStock;
          break;
        } else if (i === v.length - 1) {
          stock -= prevValue;
          prevValue = 0;
          break;
        }
      }
      return stock;
    });

  // Zwrocenie danych do wykresu
  const data = {
    labels: newChartLabeling(numberOfLabels)[0],
    datasets: [
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
