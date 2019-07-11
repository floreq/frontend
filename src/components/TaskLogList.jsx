import React from "react";
import {
  getFormattedDate,
  getFormattedTime
} from "../scripts/getFormattedDate";

function TaskLogList(props) {
  const logEntry = props.tasks.map(item => (
    <tr key={item.id} className={item.deletedAt != null ? "canceled" : null}>
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
      <td className="capitalize">
        <h4>Rodzaj materiału</h4>
        {item.metalType === "" ? "-" : item.metalType}
      </td>
      <td>
        <h4>Gdzie</h4>
        {item.originId}
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
