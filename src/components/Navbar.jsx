import React from "react";
import User from "./User";

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>Podsumowanie</li>
          <li>Dziennik aktywności</li>
        </ul>
        <div>
          <ul>
            <li>Sklep 1</li>
            <li>Sklep 2</li>
            <li>Sklep 3</li>
          </ul>
          <User />
        </div>
      </nav>
      <hr className="nav-hr" />
    </React.Fragment>
  );
}

export default Navbar;
