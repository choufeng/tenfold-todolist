import { useState } from "react";

export default function useList(initValue) {
  const [value, setValue] = useState(initValue);
  const doAdd = e => setValue(value.concat({ title: e, done: false }));
  const doDelete = e => setValue(value.filter((v, i) => e !== i));
  const doDone = e => {
    const list = [...value];
    list[e].done = !list[e].done;
    setValue(list);
  };
  const getValue = () =>
    value.map((item, i) => Object.assign(item, { id: i + 1 }));
  return {
    value,
    getValue,
    doAdd,
    doDelete,
    doDone
  };
}
