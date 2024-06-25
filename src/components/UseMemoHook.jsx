import React, { useState, useMemo } from "react";
import { initialItems } from "./Utility";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

//   const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);
const selectedItem= useMemo(() => items.find((item) => item.id === count), [count, items]);

  return (
    <div className="useMemo">
      <h1>UseMemoHook</h1>
      <h2>Count: {count}</h2>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemoHook;
