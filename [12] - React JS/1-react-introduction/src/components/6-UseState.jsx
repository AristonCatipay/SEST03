import { useState } from "react";

/*
useState():
- allows us to create a stateful variable 
    and a setter function to update it's value.
Syntax:
const [statefulVariable, setterFunction] = useState(initialValue)
*/

function UseState() {
  /*
  // Variables doesn't trigger a re-render.
  let count = 0;

  const increment = () => {
    // count = count + 1;
    count += 1;
    console.log("Count:", count);
  };
  */

  const [count, setCount] = useState(0);

  /*
  This will increment by 1.
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  */

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // 0 + 1 = 1
    setCount((prevCount) => prevCount + 1); // 1 + 1 = 2
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseState;
