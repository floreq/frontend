import React from "react";

function TasksList(props) {
  // Odczytanie zadan z tablicy
  const newTask = props.tasks.map(item => (
    <div
      key={item.id}
      className={item.deletedAt != null ? "task-list strike" : "task-list"}
    >
      <div>
        <span>{`${item.expense} zł`}</span>
        <h4>{item.deletedAt != null ? "Anulowano" : item.actionDate}</h4>
      </div>
      <div className="task-description">
        <span className="border-right">
          {item.quantity === "" ? "" : item.quantity + " kg"}
        </span>
        <h4 className={item.deletedAt != null ? null : "orange"}>
          {item.metalType === "stalowy" ? "St" : "Kl"}
        </h4>
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
