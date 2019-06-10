import React from "react";

function CashStatus() {
  return (
    <div>
      <div className="border component">
        <div className="border-title-extended">
          <div>
            <h2>Stan kasy</h2>
            <h4>obecnie</h4>
          </div>
          <div className="align-right">
            <h2>12345,10 zł</h2>
            <h4>+ 1230,00 zł</h4>
          </div>
        </div>
        <div className="border-title-extended">
          <div>
            <h2>Wydatki</h2>
            <h4>łącznie</h4>
          </div>
          <div className="align-right">
            <h2>- 6012,90 zł</h2>
            <h4>- 120,90 zł</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashStatus;
