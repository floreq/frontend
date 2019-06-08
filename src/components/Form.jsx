import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        <h4>W dniu</h4>
        <input
          type="text"
          name="dateOfEntry"
          value={props.enteredTask.dateOfEntry}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <h4>Zadanie</h4>
        <select
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
          className="align-right"
          type="text"
          name="expense"
          value={props.enteredTask.expense}
          onChange={props.handleChange}
        />
        <span>zł</span>
      </label>
      <label>
        <h4>Ilość</h4>
        <input
          className="align-right"
          type="text"
          name="quantity"
          value={props.enteredTask.quantity}
          onChange={props.handleChange}
        />
        <span>kg</span>
      </label>
      <label>
        <h4>Rodzaj złomu</h4>
        <select
          name="type"
          // Jesli sie nie zmienilo opcji, wartosc zostawala pusta
          value={
            props.enteredTask.type === ""
              ? (props.enteredTask.type = "stalowy")
              : props.enteredTask.type
          }
          onChange={props.handleChange}
        >
          <option value="stalowy">Stalowy</option>
          <option value="kolorowy">Kolorowy</option>
        </select>
      </label>
      <button>Zatwierdź</button>
    </form>
  );
}

export default Form;
