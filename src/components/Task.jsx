import React, { Component } from "react";
import { isValidDate } from "./../scripts/isValidDate";
import Form from "./Form";

const formValid = ({ formErrors, enteredTask }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(enteredTask).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};

class Task extends Component {
  constructor() {
    super();
    this.state = {
      // enteredTask przechowuje wprowadzane dane przez uzytkownika
      enteredTask: {
        dateOfEntry: "",
        task: "",
        comment: "",
        expense: "",
        quantity: "",
        type: ""
      },
      possibleTasks: ["zakup", "odbior", "zaliczka", "wplywy", "wydatki"],
      possibleTypes: ["St", "Kl"],
      // formErrors przechowuje bledy walidacyjne (np. Niewlasciwy format daty)
      formErrors: {
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
        dateOfEntry: `${day}.${m}.${year}`
      }
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "dateOfEntry":
        formErrors.dateOfEntry = isValidDate(value) ? "" : "dd.mm.rrrr";
        break;
      // case "comment":
      //   formErrors.comment =
      //     value.length < 3 ? "minimum 3 characaters required" : "";
      //   break;
      case "task":
        formErrors.task = this.state.possibleTasks.includes(value)
          ? ""
          : "Brak takiego zadania";
        break;
      case "expense":
        formErrors.expense = isNaN(value) ? "np. 10.99" : "";
        break;
      case "quantity":
        formErrors.quantity = isNaN(value) ? "np. 1100.90" : "";
        break;
      case "type":
        formErrors.type = this.state.possibleTypes.includes(value)
          ? ""
          : "Brak takiego rodzaju";
        break;
      default:
        break;
    }

    this.setState(prevState => ({
      enteredTask: {
        ...prevState.enteredTask,
        [name]: value
      },
      formErrors
    }));
    console.log(this.state);
  }

  // Dodanie zadania do listy wszystkich zadan
  handleSubmit(event) {
    event.preventDefault();

    if (formValid(this.state)) {
      this.setState(prevState => {
        const newTaskEntry = prevState.enteredTask;
        let tasksList = prevState.tasks;
        tasksList.unshift(newTaskEntry);
        return {
          tasks: tasksList
        };
      });

      this.props.handleTransfer(this.state.tasks);

      console.log("Submited", this.state);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    this.setState(prevState => {
      const newTaskEntry = prevState.enteredTask;
      let tasksList = prevState.tasks;
      tasksList.unshift(newTaskEntry);
      return {
        tasks: tasksList
      };
    });
  }

  render() {
    return (
      <div className="component">
        <h4>Zlecenie</h4>
        <h1>{this.props.workplaceName}</h1>
        <Form
          formErrors={this.state.formErrors}
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
