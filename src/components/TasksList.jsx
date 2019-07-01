import React from "react";

function TasksList(props) {
  console.log(props.tasks);
  // Odczytanie zadan z tablicy
  const newTask = props.tasks.map(item => (
    <div key={item.actionDate} className="task-list">
      <div>
        <span>{`${item.expense} zł`}</span>
        <h4>{item.actionDate}</h4>
      </div>
      <div className="task-description">
        <span className="border-right">
          {item.quantity === "" ? "" : item.quantity + " kg"}
        </span>
        <h4 className="orange">{item.metalType}</h4>
      </div>
    </div>
  ));
  return (
    <div className="border component">
      <div className="border-title">
        <h2>Ostatnie zlecenia</h2>
        <h4>{props.workplaceName}</h4>
      </div>
      {newTask.length === 0 ? "Brak dokonanych zleceń" : newTask}
    </div>
  );
}

export default TasksList;
