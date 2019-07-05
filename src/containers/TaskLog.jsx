import React from "react";
import {
  selectDayPeriod,
  selectDescendingOrAscending,
  selectLocation
} from "../components/SortingTypes";
import TaskLogList from "../components/TaskLogList";

function TaskLog(props) {
  console.log(props.tasks);
  return (
    <div>
      <div className="component">
        {selectDayPeriod}
        {selectDescendingOrAscending("dni")}
        {selectLocation}
      </div>
      <TaskLogList tasks={props.tasks} deleteRequest={props.deleteRequest} />
    </div>
  );
}

export default TaskLog;
