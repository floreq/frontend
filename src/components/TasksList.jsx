import React from "react";

function TasksList(props) {
  //   const test = [
  //     {
  //       dateOfEntry: "09-06-2019",
  //       expense: "1 203",
  //       quantity: "0,123",
  //       type: "St"
  //     },
  //     {
  //       dateOfEntry: "09-06-2018",
  //       expense: "1 123",
  //       quantity: "0,042",
  //       type: "St"
  //     }
  //   ];

  const newTask = props.tasks.map(item => (
    <div key={item.dateOfEntry} className="task-list">
      <div>
        <span>{`${item.expense} zł`}</span>
        <h4>{item.dateOfEntry}</h4>
      </div>
      <div className="task-description">
        <span className="border-right">{`${item.quantity} kg`}</span>
        <h4 className="orange">{item.type}</h4>
      </div>
    </div>
  ));
  console.log(newTask);
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
