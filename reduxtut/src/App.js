import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";
export default function App() {
  const counter = useSelector((state) => state.mycount);
  const logged = useSelector((state) => state.mylog);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {logged ? <h2>log {logged}</h2> : ""}
    </div>
  );
}
