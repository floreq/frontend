import React from "react";

function TaskLogList(props) {
  const logEntry = props.tasks.map(item => (
    <tr key={item.actionDate}>
      <td>
        <h4>W dniu</h4>
        {item.actionDate}
      </td>
      <td>
        <h4>Zadanie</h4>
        {item.task}
      </td>
      <td>
        <h4>Komentarz</h4>
        {item.comment === "" ? "Brak" : item.comment}
      </td>
      <td>
        <h4>Kwota</h4>
        {`${item.expense} zł`}
      </td>
      <td>
        <h4>Ilość</h4>
        {`${item.quantity} kg`}
      </td>
      <td>
        <h4>Rodzaj materiału</h4>
        {item.metalType}
      </td>
      <td>
        <h4>Gdzie</h4>
        Sklep 1
      </td>
      <td className="cancel">
        <button>Anuluj</button>
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
