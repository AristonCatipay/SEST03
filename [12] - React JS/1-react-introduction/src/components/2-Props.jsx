/*
props: properties (Object)
pass data from parent component to children component.
*/

function Books() {
  return (
    <div>
      <BookCard
        title="Atomic Habits"
        author="James Clear"
        rating={4.8}
        isAvailable={true}
      ></BookCard>
      <BookCard
        title="Rich Dad Poor Dad"
        author="Robert Kiyosaki"
        rating={4.8}
        isAvailable={true}
      ></BookCard>
      <BookCard
        title="48 Laws of Power"
        author="Robert Greene"
        rating={4.7}
        isAvailable={false}
      ></BookCard>
    </div>
  );
}

export default Books;

// function BookCard(props) {
//   /*
//   Ternary Operator:
//   condition ? true : false
//   */
//   return (
//     <div>
//       <p>Title: {props.title}</p>
//       <p>Author: {props.author}</p>
//       <p>Rating: {props.rating}</p>
//       <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
//     </div>
//   );
// }

/*
Object Destructuring
*/
function BookCard({ title, author, rating, isAvailable }) {
  /*
    Ternary Operator:
    condition ? true : false
    */
  return (
    <div>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Available: {isAvailable ? "Yes" : "No"}</p>
    </div>
  );
}
