import React from "react";

function Form(props) {
  const fError = props.formErrors;
  // Przypisanie do zmiennych pol zaleznych od wyboru
  let quantity = (
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
      />
      <span>kg</span>
      {fError.quantity.length > 0 && (
        <span className="error-message">{fError.quantity}</span>
      )}
    </label>
  );
  let type = (
    <label>
      <h4>Rodzaj złomu</h4>
      <select
        className={props.formErrors.type.length > 0 ? "error" : null}
        name="type"
        // Jesli sie nie zmienilo opcji, wartosc zostawala pusta
        value={
          props.enteredTask.type === ""
            ? (props.enteredTask.type = "St")
            : props.enteredTask.type
        }
        onChange={props.handleChange}
      >
        <option value="St">Stalowy</option>
        <option value="Kl">Kolorowy</option>
      </select>
      {fError.type.length > 0 && (
        <span className="error-message">{fError.type}</span>
      )}
    </label>
  );

  return (
    <form onSubmit={props.handleSubmit} noValidate>
      <label>
        <h4>W dniu</h4>
        <input
          className={fError.dateOfEntry.length > 0 ? "error" : null}
          type="text"
          name="dateOfEntry"
          value={props.enteredTask.dateOfEntry}
          onChange={props.handleChange}
        />
        {fError.dateOfEntry.length > 0 && (
          <span className="error-message">{fError.dateOfEntry}</span>
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
      {props.enteredTask.extended ? quantity : null}
      {props.enteredTask.extended ? type : null}
      <button>Zatwierdź</button>
    </form>
  );
}

export default Form;
