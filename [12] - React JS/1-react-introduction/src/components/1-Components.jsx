/*
Two types of components:
1. Class-based components
2. Functions-based compenents 
Pascal Naming Convention: OneTwoThree

JSX: JavaScript XML
*/

function Component() {
  // return(): this can only return a single-element.
  const greeting = "Welcome to React.js. Let's gooo!";
  return (
    <div>
      <h1>Welcome to React JS.</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
      <p>{greeting}</p>
    </div>
  );
}

export default Component;
