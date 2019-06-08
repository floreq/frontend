import React, { Component } from "react";
import Order from "./Order";
import Stock from "./Stock";

class Workplace extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      workplaceName: "Skelp 1",
      stock: [
        {
          id: 1,
          name: "Złom stalowy",
          shortname: "St",
          value: "2 231,202"
        },
        {
          id: 2,
          name: "Metal kolorowy",
          shortname: "Kl",
          value: "231,120"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Order workplaceName={this.state.workplaceName} />
        <div className="two-columns">
          <Stock stock={this.state.stock} />
        </div>
      </div>
    );
  }
}

export default Workplace;
