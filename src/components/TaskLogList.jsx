import React from "react";

function TaskLogList(props) {
  const logEntry = props.tasks.map(item => (
    <li key={item.dateOfEntry}>
      <div>
        <h4>W dniu</h4>
        {item.dateOfEntry}
      </div>
      <div>
        <h4>Zadanie</h4>
        {item.task}
      </div>
      <div>
        <h4>Komentarz</h4>
        {item.comment === "" ? "Brak" : item.comment}
      </div>
      <div>
        <h4>Kwota</h4>
        {`${item.expense} zł`}
      </div>
      <div>
        <h4>Ilość</h4>
        {`${item.quantity} kg`}
      </div>
      <div>
        <h4>Rodzaj materiału</h4>
        {item.type}
      </div>
      <div>
        <h4>Gdzie</h4>
        Sklep 1
      </div>
      <div className="cancel">
        <button>Anuluj</button>
      </div>
    </li>
  ));
  return (
    <div className="component">
      <ul className="task-log">{logEntry}</ul>
    </div>
  );
}

export default TaskLogList;
