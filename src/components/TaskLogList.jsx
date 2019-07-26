import React from "react";
import {
  getFormattedDate,
  getFormattedTime
} from "../scripts/getFormattedDate";

function TaskLogList(props) {
  // const test = [];
  // for (let i = 0; i <= 50; i++) {
  //   console.log(
  //     getFormattedDate(new Date(new Date().setDate(new Date().getDate() - i)))
  //   );
  // }
  // console.log(
  //   props.tasks.filter(i => i.actionDate === "20.07.2019" && i.originId === 1)
  // );
  const logEntry = props.tasks.map(item => (
    <tr key={item.id} className={item.deletedAt != null ? "gray" : null}>
      <td>
        <h4>W dniu</h4>
        {item.actionDate}
      </td>
      <td className="capitalize">
        <h4>Zadanie</h4>
        {item.task}
      </td>
      <td className="capitalize">
        <h4>Komentarz</h4>
        {item.comment === "" ? "-" : item.comment}
      </td>
      <td>
        <h4>Kwota</h4>
        {`${item.expense} zł`}
      </td>
      <td>
        <h4>Ilość</h4>
        {item.quantity === "" ? "-" : `${item.quantity} kg`}
      </td>
      <td>
        <h4>Rodzaj złomu</h4>
        {item.metalType === "" ? (
          "-"
        ) : (
          <span className="capitalize">{item.metalType}</span>
        )}
      </td>
      <td>
        <h4>Gdzie</h4>
        Sklep {item.originId}
      </td>
      <td className="cancel">
        {item.deletedAt === null ? (
          <button
            onClick={() => {
              props.deleteRequest(item.id);
            }}
          >
            Anuluj
          </button>
        ) : (
          <div>
            Anulowano
            <br />
            {`${getFormattedDate(item.deletedAt)}, ${getFormattedTime(
              item.deletedAt
            )}`}
          </div>
        )}
      </td>
    </tr>
  ));
  return (
    <table>
      <tbody>{logEntry}</tbody>
    </table>
  );
}

export default TaskLogList;
