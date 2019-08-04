// v (array) - tablica z danymi do zsumowania, np. workplaces
// vName (string) - nazwa tablicy z obiektami do zsumowania
export const sumData = (v, vName) => {
  // Sumowanie tablicy obiektów
  const sumData = v.reduce((x, y) => {
    return x + y[vName];
  }, 0);
  return { [vName]: sumData };
};

// v (array) - tablica z danymi do zsumowania, np. workplaces, vName (string) - nazwa tablicy z obiektami do zsumowania
// sumElementName (string) - nazwa w obiekcie szukanej wartosci, przykład v = [vName: [{sumElementName: 200}, {sumElementName: 0}]
export const sumDataByDate = (v, vName, sumElementName) => {
  let prevDates = [];
  const sumFilteredRows = [];

  // Wypisanie z tablicy wybranych tablic z obiektami
  const sumData = v.map(e => {
    return e[vName];
  });
  const rows = sumData.flat(); // Rozbicie wybranych tablic na obiekty, np. [[{...}{...}], {...}] -> [{...}, {...}, {...}]
  // Przystapienie do sumowania datami
  for (let i = 0; i < rows.length; i++) {
    // Sprawdzenie czy filtrowana data sie juz nie powtorzyla
    if (!prevDates.includes(rows[i].actionDate)) {
      // Filtrowanie dat
      const filteredRows = rows.filter(v => {
        return v.actionDate === rows[i].actionDate;
      });
      // Sumowanie przefiltrowanych danych datami i utworzenie obiektu
      sumFilteredRows.push({
        correctDateFormat: rows[i].correctDateFormat,
        actionDate: rows[i].actionDate,
        [sumElementName]: filteredRows.reduce((x, y) => {
          return x + y[sumElementName];
        }, 0)
      });
    }
    prevDates.push(rows[i].actionDate); // Dodanie przefiltrowanej daty
  }
  return { [vName]: sumFilteredRows };
};
