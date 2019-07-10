import React, { Component } from "react";
import { isValidDate } from "../scripts/isValidDate";
import { getFormattedDate } from "../scripts/getFormattedDate";
import Form from "./Form";

// Stwierdzenie walidacji formularza
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

  // Object.getOwnPropertyNames(enteredTask).forEach(val => {
  //   if (enteredTask[val] === "" && val !== "comment") {
  //     valid = false;
  //   } else {
  //     valid = true;
  //   }
  //   console.log(enteredTask[val]);
  // });

  return valid;
};

class Task extends Component {
  constructor() {
    super();
    this.state = {
      // enteredTask przechowuje wprowadzane dane przez uzytkownika
      enteredTask: {
        actionDate: "",
        task: "",
        comment: "",
        expense: "",
        quantity: "",
        metalType: ""
      },
      // possibleTasks/Types zawieraja mozliwe do wyboru elementy, walidacja
      possibleTasks: ["zakup", "odbior", "zaliczka", "wplywy", "wydatki"],
      possibleTypes: ["stalowy", "kolorowy"],
      // formErrors przechowuje bledy walidacyjne (np. Niewlasciwy format daty)
      formErrors: {
        actionDate: "",
        task: "",
        comment: "",
        expense: "",
        quantity: "",
        metalType: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Wykonanie funkcji gdy komponent sie zaladuje
  componentDidMount() {
    // Dodanie aktualnej daty do state
    this.setState(prevState => ({
      enteredTask: {
        ...prevState.enteredTask,
        actionDate: getFormattedDate()
      }
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    // Sprawdzanie wpisywanych wartosci w formularzu
    switch (name) {
      case "actionDate":
        formErrors.actionDate = isValidDate(value) ? "" : "dd.mm.rrrr";
        break;
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
      case "metalType":
        formErrors.metalType = this.state.possibleTypes.includes(value)
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
  }

  // Dodanie zadania do listy wszystkich zadan
  handleSubmit(event) {
    // Usuniecie domyslnego zachowania przycisku submit w formularzy (zapobiega odswiezeniu strony)
    event.preventDefault();

    // Przepuszczenie lub zatrzymanie formularza w zaleznosci od jego poprawnosci
    if (formValid(this.state)) {
      this.setState(prevState => {
        // Przeslanie przez Workplace do Wrappera zatwierdzonego zadania
        this.props.postRequest(prevState.enteredTask, this.props.workplaceId);
        return {
          // Wyczyszczenie pol formularza z wprowadzonych danych
          enteredTask: {
            ...prevState.enteredTask,
            // Aktualizacja daty
            actionDate: getFormattedDate(),
            comment: "",
            expense: "",
            quantity: ""
          }
        };
      });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
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
