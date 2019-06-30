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
          actionDate: "21.09.2019",
          task: "Zakup",
          comment: "",
          expense: "201012",
          quantity: "3200",
          metalType: "Kolorwoy",
          extended: true
        },
        {
          actionDate: "22.09.2019",
          task: "Zakup",
          comment: "",
          expense: "20",
          quantity: "3",
          metalType: "Stalowy",
          extended: true
        },
        {
          actionDate: "23.09.2019",
          task: "Zakup",
          comment: "",
          expense: "21230000010",
          quantity: "320",
          metalType: "Stalowy",
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
