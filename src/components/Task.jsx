import React, { Component } from "react";
import Form from "./Form";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      // extendedTask wyznacza wartosci kiedy powinien zostac wyswietlony caly formularz
      extendedTask: ["zakup", "odbior"],
      enteredTask: {
        dateOfEntry: "",
        task: "",
        comment: "",
        expense: "",
        quantity: "",
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

    // Dodanie aktualnej daty do state
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

  // Dodanie zadania do listy wszystkich zadan
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
          ifExtendedTask={this.state.extendedTask}
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
