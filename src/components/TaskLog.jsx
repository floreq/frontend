import React from "react";
import {
  selectDayPeriod,
  selectDescendingOrAscending,
  selectLocation
} from "./SortingTypes";

function TaskLog() {
  return (
    <div>
      {selectDayPeriod}
      {selectDescendingOrAscending("dni")}
      {selectLocation}
    </div>
  );
}

export default TaskLog;
