import React, { useState } from "react";

export default function NewItemInput(props) {
  const [value, setValue] = useState("");
  const doAdd = () => {
    props.onAdd(value);
    setValue("");
  };
  return (
    <div className="content">
      <input value={value} autoFocus onChange={e => setValue(e.target.value)} />
      <button onClick={doAdd}> Add </button>
    </div>
  );
}
