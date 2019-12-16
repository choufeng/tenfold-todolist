import React from "react";
import Item from "./Item";

export default function Items(props) {
  const { value, doDelete, doDone } = props;
  return value.map((r, i) => (
    <Item doDelete={doDelete} doDone={doDone} item={r} index={i} />
  ));
}
