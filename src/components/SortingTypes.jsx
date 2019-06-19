import React from "react";

export const selectDayPeriod = (
  <select className="sorting">
    <option value="">Ostatnie 7 dni</option>
    <option value="">Ostatnie 30 dni</option>
  </select>
);

// w wartosci what, np. Malejaco (dni)
export const selectDescendingOrAscending = what => (
  <select className="sorting">
    <option value="">Malejąco ({what})</option>
    <option value="">Rosnąco ({what})</option>
  </select>
);

export const selectLocation = (
  <select className="sorting-location">
    <option value="">Gdzie</option>
    <option value="">Sklep 1</option>
    <option value="">Sklep 2</option>
    <option value="">Sklep 3</option>
  </select>
);
