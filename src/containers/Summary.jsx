import React from "react";
import TaskLogList from "../components/TaskLogList";
import Stock from "../components/Stock";
import TasksList from "../components/TasksList";
import CashStatus from "../components/CashStatus";
import { workplaceSampleData } from "../scripts/workplaceSampleData";
import { sumData, sumDataByDate } from "../scripts/sumData";

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
          <Stock
            workplaceData={
              props.workplaceData[0] !== undefined
                ? props.workplaceData[0]
                : workplaceSampleData[0]
            }
          />
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
          <Stock
            workplaceData={
              props.workplaceData[1] !== undefined
                ? props.workplaceData[1]
                : workplaceSampleData[0]
            }
          />
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
          <Stock
            workplaceData={
              props.workplaceData[2] !== undefined
                ? props.workplaceData[2]
                : workplaceSampleData[0]
            }
          />
        </div>
      </div>

      <div>
        <TasksList tasks={props.tasks} />
        <CashStatus
          //workplaceData={workplaceSampleData[0]}
          workplaceData={
            props.workplaceData.length !== 0
              ? {
                  ...sumData(props.workplaceData, "cashStatus"),
                  ...sumData(props.workplaceData, "sumExpenseLast7Days"),
                  ...sumDataByDate(
                    props.workplaceData,
                    "sumCashStatusGroupByDay",
                    "cashStatus"
                  ),
                  ...sumDataByDate(
                    props.workplaceData,
                    "expensesGroupByDay",
                    "sumExpenses"
                  )
                }
              : workplaceSampleData[0]
          }
        />
      </div>
    </div>
  );
}

export default Summary;
