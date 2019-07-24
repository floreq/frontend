import React from "react";
import { chartWithBorder } from "../scripts/styleAreaChart";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import { selectDayPeriod } from "./SortingTypes";
import {
  chartDataLinearGenerator,
  chartDataGenerator
} from "../scripts/chartDataGenerator";

function WorkplaceSummary(props) {
  return (
    <div className="component">
      <h4>Podsumowanie</h4>
      <div className="border summary">
        <div className="two-diffrent-columns-reverse">
          <h3>Złom stalowy</h3>
          <AreaChart
            options={chartWithBorder.options}
            data={chartDataLinearGenerator(
              props.workplaceData.metalInStockGroupByDay.filter(
                item => item.metalTypeName === "stalowy"
              ),
              "sumMetalInStock",
              props.workplaceData.metalInStock.filter(
                i => i.metalTypeName === "stalowy"
              )[0].sumMetalIncome,
              "Złom stalowy",
              12
            )}
          />
        </div>
        <div className="two-diffrent-columns-reverse">
          <h3>Metal kolorowy</h3>
          <AreaChart
            options={chartWithBorder.options}
            data={chartDataLinearGenerator(
              props.workplaceData.metalInStockGroupByDay.filter(
                item => item.metalTypeName === "kolorowy"
              ),
              "sumMetalInStock",
              props.workplaceData.metalInStock.filter(
                i => i.metalTypeName === "kolorowy"
              )[0].sumMetalIncome,
              "Metal kolorowy",
              12
            )}
          />
        </div>
      </div>
      <div className="border summary component">
        <div className="two-diffrent-columns-reverse">
          <div>
            <h3>Średnia</h3>
            <h4>Ilość przez kwota</h4>
          </div>
          <AreaChart
            options={chartWithBorder.options}
            data={chartDataGenerator([], "", "Średnia", 12)}
          />
        </div>
        <div className="two-diffrent-columns-reverse">
          <div>
            <h3>Zaliczka</h3>
            {selectDayPeriod}
          </div>
          <BarChart
            options={chartWithBorder.options}
            data={chartDataGenerator(
              props.workplaceData.sumAdvancePaymentGroupByDay,
              "sumAdvancePayment",
              "Zaliczka",
              12,
              { borderWidth: 3 }
            )}
          />
        </div>
        <div className="two-diffrent-columns-reverse">
          <div>
            <h3>Wpływy</h3>
            {selectDayPeriod}
          </div>
          <AreaChart
            options={chartWithBorder.options}
            data={chartDataGenerator(
              props.workplaceData.sumIncomeGroupByDay,
              "sumIncome",
              "Wpływy",
              12
            )}
            //data={state.stockData.data}
          />
        </div>
        <div className="two-diffrent-columns-reverse">
          <div>
            <h3>Wydatki</h3>
            {selectDayPeriod}
          </div>
          <AreaChart
            options={chartWithBorder.options}
            data={chartDataGenerator(
              props.workplaceData.expensesGroupByDay,
              "sumExpenses",
              "Wydatki",
              12
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkplaceSummary;
