import React, { Component } from "react";
import {
  selectDayPeriod,
  selectDescendingOrAscending,
  selectLocation
} from "../components/SortingTypes";
import TaskLogList from "../components/TaskLogList";

class TaskLog extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          dateOfEntry: "21.09.2019",
          task: "Zakup",
          comment: "",
          expense: "2010",
          quantity: "320",
          type: "Stalowy",
          extended: true
        },
        {
          dateOfEntry: "22.09.2019",
          task: "Zakup",
          comment: "",
          expense: "2010",
          quantity: "320",
          type: "Stalowy",
          extended: true
        },
        {
          dateOfEntry: "23.09.2019",
          task: "Zakup",
          comment: "",
          expense: "2010",
          quantity: "320",
          type: "Stalowy",
          extended: true
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="component">
          {selectDayPeriod}
          {selectDescendingOrAscending("dni")}
          {selectLocation}
        </div>
        <TaskLogList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskLog;
