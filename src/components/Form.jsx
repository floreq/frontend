import React from "react";

function Form(props) {
  return (
    <form>
      <label>
        <h4>W dniu</h4>
        <input
          type="text"
          name="date"
          value={`${props.date.day}-${props.date.month}-${props.date.year}`}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <h4>Zadanie</h4>
        <select>
          <option value="volvo">Zakup</option>
          <option value="saab">Odbiór</option>
          <option value="mercedes">Zaliczka</option>
          <option value="audi">Wpływy</option>
          <option value="audi">Wydatki</option>
        </select>
      </label>
      <label>
        <h4>Komentarz</h4>
        <input type="text" />
      </label>
      <label>
        <h4>Kwota</h4>
        <input type="text" />
        <span>zł</span>
      </label>
      <label>
        <h4>Ilość (w kg)</h4>
        <input type="text" />
      </label>
      <label>
        <h4>Rodzaj złomu</h4>
        <select>
          <option value="stalowy">Stalowy</option>
          <option value="kolorowy">Kolorowy</option>
        </select>
      </label>
      <button>Zatwierdź</button>
    </form>
  );
}

export default Form;
