import React, { useEffect } from "react";
import "./App.css";
import Items from "./components/Items";
import NewItemInput from "./components/NewItemInput";
import useList from "./models/todoModel";

export default function App() {
  useEffect(() => {
    document.title = "Wecome to Tenfold Todo List";
  });
  const listMod = useList([]);
  return (
    <div>
      <h1>Todo List</h1>
      <Items
        value={listMod.getValue()}
        doDelete={listMod.doDelete}
        doDone={listMod.doDone}
      />
      <NewItemInput onAdd={listMod.doAdd} />
    </div>
  );
}
