import React, { Component } from "react";
import Form from "./Form";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      enteredTask: {
        dateOfEntry: "",
        task: "",
        comment: "",
        expense: 0,
        quantity: 0,
        type: ""
      },
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Wykonanie funkcji gdy komponent sie zaladuje
  componentDidMount() {
    const d = new Date();
    // Dodanie 0 przed jednocyfrowym dniem
    const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    // Dodanie 0 przed jednocyfrowym miesiacem
    const m = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    const year = d.getFullYear();

    this.setState(prevState => ({
      enteredTask: {
        ...prevState.enteredTask,
        dateOfEntry: `${day}-${m}-${year}`
      }
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState(prevState => ({
      enteredTask: {
        ...prevState.enteredTask,
        [name]: value
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => {
      const newTaskEntry = prevState.enteredTask;
      let tasksList = prevState.tasks;
      tasksList.unshift(newTaskEntry);
      return {
        tasks: tasksList
      };
    });

    this.props.handleTransfer(this.state.tasks);
  }

  render() {
    return (
      <div className="component">
        <h4>Zlecenie</h4>
        <h1>{this.props.workplaceName}</h1>
        <Form
          enteredTask={this.state.enteredTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <hr />
      </div>
    );
  }
}

export default Task;
