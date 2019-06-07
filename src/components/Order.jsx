import React, { Component } from "react";

class Order extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>Zlecenie</h4>
        <h1>{this.props.workplaceName}</h1>
        <form>
          <label>
            <h4>W dniu</h4>
            <input type="text" />
          </label>
          <label>
            <h4>Zadanie</h4>
            <select>
              <option value="volvo">Zakup</option>
              <option value="saab">Odbiór</option>
              <option value="mercedes">Zaliczka</option>
              <option value="audi">Wpływy</option>
              <option value="audi">Wydatki</option>
            </select>
          </label>
          <label>
            <h4>Kwota</h4>
            <input type="text" />
          </label>
          <label>
            <h4>Ilość (w kg)</h4>
            <input type="text" />
          </label>
          <label>
            <h4>Rodzaj materiału</h4>
            <input type="text" />
          </label>
          <button>Zatwierdź</button>
        </form>
      </div>
    );
  }
}

export default Order;
