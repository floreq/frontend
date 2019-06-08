import React from "react";

function Stock(props) {
  const elements = props.stock.map(item => {
    return (
      <div key={item.id} className="border stock">
        <div>
          <h4>{item.shortname}</h4>
          <h3>{item.name}</h3>
        </div>
        <h3 className="non-bold">{`${item.value} kg`}</h3>
      </div>
    );
  });
  return (
    <div>
      <h4>Stan magazynu</h4>
      <div className="two-columns">{elements}</div>
      <hr />
    </div>
  );
}

export default Stock;
