import React from "react";
import { NavLink } from "react-router-dom";
import User from "./User";

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Podsumowanie
            </NavLink>
          </li>
          <li>
            <NavLink to="/task-log">Dziennik aktywności</NavLink>
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <NavLink to="/workplace/1">Sklep 1</NavLink>
            </li>
            <li>
              <NavLink to="/workplace/2">Sklep 2</NavLink>
            </li>
            <li>
              <NavLink to="/workplace/3">Sklep 3</NavLink>
            </li>
          </ul>
          <User />
        </div>
      </nav>
      <hr className="nav-hr" />
    </React.Fragment>
  );
}

export default Navbar;
