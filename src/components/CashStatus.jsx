import React from "react";
import { simpleChart } from "./../scripts/styleAreaChart";
import AreaChart from "./AreaChart";
import {
  chartDataLinearGenerator,
  chartDataGenerator
} from "../scripts/chartDataGenerator";

function CashStatus(props) {
  return (
    <div>
      <div className="border component">
        <div className="border-title-extended">
          <div>
            <h2>Stan kasy</h2>
            <h4>Obecnie</h4>
          </div>
          <div className="align-right">
            <h2>
              {props.workplaceData.cashStatus < 0
                ? `- ${-props.workplaceData.cashStatus} zł`
                : `${props.workplaceData.cashStatus} zł`}
            </h2>
          </div>
        </div>
        <AreaChart
          options={simpleChart.options}
          data={chartDataLinearGenerator(
            props.workplaceData.sumCashStatusGroupByDay,
            "cashStatus",
            props.workplaceData.cashStatus,
            "Stan kasy",
            7
          )}
        />
        <div className="border-title-extended border-top">
          <div>
            <h2>Wydatki</h2>
            <h4>Suma z ostatatnich 7 dni</h4>
          </div>
          <div className="align-right">
            <h2>- {props.workplaceData.sumExpenseLast7Days} zł</h2>
          </div>
        </div>
        <AreaChart
          options={simpleChart.options}
          data={chartDataGenerator(
            props.workplaceData.expensesGroupByDay,
            "sumExpenses",
            "Wydatki",
            7
          )}
        />
      </div>
    </div>
  );
}

export default CashStatus;
