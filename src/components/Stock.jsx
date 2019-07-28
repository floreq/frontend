import React from "react";

function Stock(props) {
  const nameScheme = {
    stalowy: "Złom stalowy",
    stalowyShort: "St",
    kolorowy: "Metal kolorowy",
    kolorowyShort: "Kl",
    default: "Błąd"
  };
  // Pobranie i rozmieszczenie danych z tablicy
  const elements = props.workplaceData.metalInStock.map(item => {
    return (
      <div key={item.metalTypeName} className="border stock">
        <div>
          <h4 className="orange">
            {nameScheme[item.metalTypeName + "Short"] !== undefined
              ? nameScheme[item.metalTypeName + "Short"]
              : nameScheme.default}
          </h4>
          <h3>
            {nameScheme[item.metalTypeName] !== undefined
              ? nameScheme[item.metalTypeName]
              : nameScheme.default}
          </h3>
        </div>
        <h3 className="non-bold">{`${Math.round(
          (item.sumMetalIncome / 1000) * 10
        ) / 10} t`}</h3>
      </div>
    );
  });
  return (
    <div className="component">
      <h4>Stan magazynu</h4>
      <div className="two-columns">{elements}</div>
      <hr />
    </div>
  );
}

export default Stock;
