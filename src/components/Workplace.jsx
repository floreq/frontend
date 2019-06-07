import React, { Component } from "react";
import Order from "./Order";

class Workplace extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      workplaceName: "Skelp 1"
    };
  }
  render() {
    return <Order workplaceName={this.state.workplaceName} />;
  }
}

export default Workplace;
