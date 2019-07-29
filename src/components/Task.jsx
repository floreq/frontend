import React, { Component } from "react";
import { isValidDate } from "../scripts/isValidDate";
import { getFormattedDate } from "../scripts/getFormattedDate";
import Form from "./Form";

// Stwierdzenie walidacji formularza
const formValid = ({
  enteredTask,
  possibleTasks,
  possibleMetalTypes,
  disabledFieldsIf
}) => {
  let valid = true;
  let err = {};

  for (let [key, v] of Object.entries(enteredTask)) {
    switch (key) {
      case "actionDate":
        if (!(typeof v === "string" && isValidDate(v))) {
          valid = false;
          err[key] = "dd.mm.rrrr";
        } else {
          err[key] = "";
        }
        break;
      case "task":
        if (!(typeof v === "string" && possibleTasks.includes(v))) {
          valid = false;
          err[key] = "Brak takiego zadania";
        } else {
          err[key] = "";
        }
        break;
      case "comment":
        if (!(typeof v === "string")) {
          valid = false;
        } else {
          err[key] = "";
        }
        break;
      case "expense":
        if (!(typeof v === "string" && v !== "" && !isNaN(v) && v >= 0)) {
          valid = false;
          err[key] = "np. 10.99";
        } else {
          err[key] = "";
        }
        break;
      case "quantity":
        if (
          !(
            typeof v === "string" &&
            !isNaN(v) &&
            v >= 0 &&
            (v !== "" || disabledFieldsIf.includes(enteredTask.task))
          )
        ) {
          valid = false;
          err[key] = "np. 1100.90";
        } else {
          err[key] = "";
        }
        break;
      case "metalType":
        if (
          !(
            typeof v === "string" &&
            (possibleMetalTypes.includes(v) ||
              disabledFieldsIf.includes(enteredTask.task))
          )
        ) {
          valid = false;
          err[key] = "Brak takiego rodzaju";
        } else {
          err[key] = "";
        }
        break;
      default:
        valid = false;
    }
  }
  return { ifValid: valid, message: err };
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
      possibleMetalTypes: ["stalowy", "kolorowy"],
      disabledFieldsIf: ["zaliczka", "wplywy", "wydatki"],
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
    let enteredTask = { ...this.state.enteredTask };

    // Sprawdzanie wpisywanych wartosci w formularzu
    switch (name) {
      case "actionDate":
        formErrors.actionDate = isValidDate(value) ? "" : "dd.mm.rrrr";
        break;
      case "task":
        if (this.state.disabledFieldsIf.includes(value)) {
          enteredTask.quantity = "";
          formErrors.quantity = "";
          formErrors.metalType = "";
        }
        formErrors.task = this.state.possibleTasks.includes(value)
          ? ""
          : "Brak takiego zadania";
        break;
      case "expense":
        formErrors.expense = isNaN(value) || value < 0 ? "np. 10.99" : "";
        break;
      case "quantity":
        formErrors.quantity = isNaN(value) || value < 0 ? "np. 1100.90" : "";
        break;
      case "metalType":
        formErrors.metalType = this.state.possibleMetalTypes.includes(value)
          ? ""
          : "Brak takiego rodzaju";
        break;
      default:
        break;
    }
    this.setState({
      enteredTask: {
        ...enteredTask,
        [name]: value
      },
      formErrors
    });
  }

  // Dodanie zadania do listy wszystkich zadan
  handleSubmit(event) {
    // Usuniecie domyslnego zachowania przycisku submit w formularzy (zapobiega odswiezeniu strony)
    event.preventDefault();
    const ifFormValid = formValid(this.state);
    // Przepuszczenie lub zatrzymanie formularza w zaleznosci od jego poprawnosci
    if (ifFormValid.ifValid) {
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
      const formErrors = { ...this.state.formErrors, ...ifFormValid.message };
      this.setState({ formErrors });
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }

  render() {
    return (
      <div className="component">
        <h4>Zlecenie</h4>
        <h1>{`${this.props.workplaceName} ${this.props.workplaceId}`}</h1>
        <Form
          formErrors={this.state.formErrors}
          enteredTask={this.state.enteredTask}
          disabledFieldsIf={this.state.disabledFieldsIf}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <hr />
      </div>
    );
  }
}

export default Task;
