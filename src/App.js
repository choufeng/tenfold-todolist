import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const input = useInput("");
  const list = useList([], input.value);
  const doAdd = () => {
    list.doAdd();
    input.clear();
  };
  useEffect(() => {
    document.title = "Wecome to Tenfold Todo List";
  });
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="content">
        <table>
          <tbody>{<Items {...list} />}</tbody>
        </table>
        <input value={input.value} onChange={input.onChange} />
        <button onClick={doAdd}> Add </button>
      </div>
    </div>
  );
}

function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  const onChange = e => setValue(e.target.value);
  const clear = () => setValue("");
  return {
    value,
    onChange,
    clear
  };
}

function useList(initValue, inputValue) {
  const [value, setValue] = useState(initValue);
  const doAdd = () =>
    setValue(value.concat({ title: inputValue, done: false }));
  const doDelete = e => setValue(value.filter((v, i) => e !== i));
  const doDone = e => {
    const list = [...value];
    list[e].done = !list[e].done;
    setValue(list);
  };
  return {
    value,
    doAdd,
    doDelete,
    doDone
  };
}

function Items(props) {
  const { value, doDelete, doDone } = props;
  return value.map((r, i) => (
    <tr key={i}>
      <td>
        <input
          type="checkbox"
          value={i}
          checked={r.done}
          onChange={e => doDone(e.target.value)}
        />
      </td>
      <td>{r.done ? <s>{r.title}</s> : <b>{r.title}</b>}</td>
      <td>
        <button onClick={() => doDelete(i)}>X</button>
      </td>
    </tr>
  ));
}
