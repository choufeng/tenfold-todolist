import React, { useState, useEffect } from "react";
import "./App.css";
import Items from "./components/Items";
import Todo from "./models/todo";
const todo = new Todo([]);

export default function App() {
  const input = useInput("");
  const list = todo.list;
  const doAdd = () => {
    todo.add({ title: input.value, done: false });
    input.clear();
  };
  const doDelete = e => {
    todo.remove(e);
  };
  useEffect(() => {
    document.title = "Wecome to Tenfold Todo List";
  });
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="content">
        <table>
          <tbody>
            {
              <Items
                value={list}
                doDelete={doDelete}
                doDone={e => todo.done(e)}
              />
            }
          </tbody>
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
