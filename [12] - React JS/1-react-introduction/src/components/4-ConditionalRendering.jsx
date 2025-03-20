/*
Conditional Rendering:
control what gets rendered in our application 
based on a certain condition.
*/

function ConditionalRendering({ isUserLoggedIn, username }) {
  //   if (isUserLoggedIn) {
  //     return <h1>Welcome {username}!</h1>;
  //   } else {
  //     return <h1>Welcome Guest!</h1>;
  //   }

  //   if (isUserLoggedIn) {
  //     return <h1>Welcome {username}!</h1>;
  //   }
  //   return <h1>Welcome Guest!</h1>;

  // Ternary Operator: {condition ? true : false}
  return <h1>Welcome {isUserLoggedIn ? username : "Guest!"}</h1>;
}

export default ConditionalRendering;
