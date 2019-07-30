import React from "react";
import TaskLogList from "../components/TaskLogList";
import Stock from "../components/Stock";
import CashStatus from "../components/CashStatus";
import { workplaceSampleData } from "../scripts/workplaceSampleData";

function Summary(props) {
  return (
    <div className="two-diffrent-columns">
      <div>
        <div className="component short-table">
          <h4>Ostatnia aktywność</h4>
          <h1>Sklep 1</h1>
          <TaskLogList
            tasks={props.tasks
              .filter(e => e.originId === 1 && e.deletedAt === null)
              .slice(0, 1)}
            deleteRequest={props.deleteRequest}
          />
          <hr />
          <Stock workplaceData={workplaceSampleData[0]} />
        </div>
        <div className="component short-table">
          <h4>Ostatnia aktywność</h4>
          <h1>Sklep 2</h1>
          <TaskLogList
            tasks={props.tasks
              .filter(e => e.originId === 2 && e.deletedAt === null)
              .slice(0, 1)}
            deleteRequest={props.deleteRequest}
          />
          <hr />
          <Stock workplaceData={workplaceSampleData[0]} />
        </div>
        <div className="component short-table">
          <h4>Ostatnia aktywność</h4>
          <h1>Sklep 3</h1>
          <TaskLogList
            tasks={props.tasks
              .filter(e => e.originId === 3 && e.deletedAt === null)
              .slice(0, 1)}
            deleteRequest={props.deleteRequest}
          />
          <hr />
          <Stock workplaceData={workplaceSampleData[0]} />
        </div>
      </div>

      <div>
        <CashStatus workplaceData={workplaceSampleData[0]} />
      </div>
    </div>
  );
}

export default Summary;
