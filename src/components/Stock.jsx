import React from "react";

function Stock(props) {
  // Pobranie i rozmieszczenie danych z tablicy
  const elements = props.stock.map(item => {
    return (
      <div key={item.id} className="border stock">
        <div>
          <h4 className="orange">{item.shortname}</h4>
          <h3>{item.name}</h3>
        </div>
        <h3 className="non-bold">{`${item.value} t`}</h3>
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
