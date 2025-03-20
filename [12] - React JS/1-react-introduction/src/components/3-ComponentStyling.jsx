/*
Three ways to add style to React:
1. External: use global files. index.css/App.css
- Advantage: easy to use, and it will affect all components.
- Disadvantage: can lead to naming conflicts.
2. Module:
- Create a folder for each component.
- Create a css file: (Convention: Component.module.css)
- Add this to the top of the component:
    - import styles from './Component.module.css'
- className={styles.class}
3. Inline Styles: 
- Follow the camel case naming convention for each property.
- Values should be in a form of a string.
- div style={objectName}
*/

function BooksContainer() {
  const styles = {
    backgroundColor: "#606c38",
    padding: "20px",
  };
  return (
    <div style={styles}>
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

export default BooksContainer;

function BookCard({ title, author, rating, isAvailable }) {
  /*
    Ternary Operator:
    condition ? true : false
    */
  return (
    <div className="book-card">
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Available: {isAvailable ? "Yes" : "No"}</p>
    </div>
  );
}
