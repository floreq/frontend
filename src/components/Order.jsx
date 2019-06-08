import React, { Component } from "react";
import Form from "./Form";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
  }

  render() {
    const myDate = this.state.date;
    const day =
      myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
    const month =
      myDate.getMonth() + 1 < 10
        ? "0" + (myDate.getMonth() + 1)
        : myDate.getMonth() + 1;
    const year = this.state.date.getFullYear();
    return (
      <div>
        <h4>Zlecenie</h4>
        <h1>{this.props.workplaceName}</h1>
        <Form date={{ day, month, year }} handleChange={this.handleChange} />
        <hr />
      </div>
    );
  }
}

export default Order;
