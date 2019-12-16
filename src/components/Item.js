import React from "react";

export default function Item(props) {
  const { index, item, doDelete, doDone } = props;
  console.log("show index", index);
  return (
    <tr key={index}>
      <td>
        <input
          type="checkbox"
          value={index}
          checked={item.done}
          onChange={e => doDone(e.target.value)}
        />
      </td>
      <td>{item.done ? <s>{item.title}</s> : <b>{item.title}</b>}</td>
      <td>
        <button onClick={() => doDelete(index)}>X</button>
      </td>
    </tr>
  );
}
