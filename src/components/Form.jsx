import React from "react";

function Form(props) {
  // Zmienna potrzebna do wyswietlenia bledu walidacji
  const fError = props.formErrors;
  return (
    <form onSubmit={props.handleSubmit} noValidate>
      <label>
        <h4>W dniu</h4>
        <input
          className={fError.actionDate.length > 0 ? "error" : null}
          type="text"
          name="actionDate"
          value={props.enteredTask.actionDate}
          onChange={props.handleChange}
        />
        {fError.actionDate.length > 0 && (
          <span className="error-message">{fError.actionDate}</span>
        )}
      </label>
      <label>
        <h4>Zadanie</h4>
        <select
          className={fError.task.length > 0 ? "error" : null}
          name="task"
          // Jesli sie nie zmienilo opcji, wartosc zostawala pusta
          value={
            props.enteredTask.task === ""
              ? (props.enteredTask.task = "zakup")
              : props.enteredTask.task
          }
          onChange={props.handleChange}
        >
          <option value="zakup">Zakup</option>
          <option value="odbior">Odbiór</option>
          <option value="zaliczka">Zaliczka</option>
          <option value="wplywy">Wpływy</option>
          <option value="wydatki">Wydatki</option>
        </select>
        {fError.task.length > 0 && (
          <span className="error-message">{fError.task}</span>
        )}
      </label>
      <label>
        <h4>Komentarz</h4>
        <input
          type="text"
          name="comment"
          value={props.enteredTask.comment}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <h4>Kwota</h4>
        <input
          className={
            props.formErrors.expense.length > 0
              ? "align-right error"
              : "align-right"
          }
          type="text"
          name="expense"
          value={props.enteredTask.expense}
          onChange={props.handleChange}
        />
        <span>zł</span>
        {fError.expense.length > 0 && (
          <span className="error-message">{fError.expense}</span>
        )}
      </label>
      <label>
        <h4>Ilość</h4>
        <input
          className={
            fError.quantity.length > 0 ? "error align-right" : "align-right"
          }
          type="text"
          name="quantity"
          value={props.enteredTask.quantity}
          onChange={props.handleChange}
          disabled={
            props.disabledFieldsIf.includes(props.enteredTask.task)
              ? "disabled"
              : null
          }
        />
        <span
          className={
            props.disabledFieldsIf.includes(props.enteredTask.task)
              ? "gray"
              : null
          }
        >
          kg
        </span>
        {// Wyswietlenie bledu walidacji
        fError.quantity.length > 0 && (
          <span className="error-message">{fError.quantity}</span>
        )}
      </label>
      <label>
        <h4>Rodzaj złomu</h4>
        <select
          className={props.formErrors.metalType.length > 0 ? "error" : null}
          name="metalType"
          value={
            props.disabledFieldsIf.includes(props.enteredTask.task) // Jezeli zadanie zawiera sie w disabledFieldsIf zwroc ""
              ? (props.enteredTask.metalType = "")
              : props.enteredTask.metalType === "" // Jezeli nie, a metalType jest "" to zwroc stalowy
              ? (props.enteredTask.metalType = "stalowy")
              : props.enteredTask.metalType
          }
          onChange={props.handleChange}
          disabled={
            props.disabledFieldsIf.includes(props.enteredTask.task)
              ? "disabled"
              : null
          }
        >
          <option value="stalowy">Stalowy</option>
          <option value="kolorowy">Kolorowy</option>
        </select>
        {fError.metalType.length > 0 && (
          <span className="error-message">{fError.metalType}</span>
        )}
      </label>
      <button>Zatwierdź</button>
    </form>
  );
}

export default Form;
