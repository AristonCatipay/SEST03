import "./App.css";
import Component from "./components/1-Components";
import Books from "./components/2-Props";
import BooksContainer from "./components/3-ComponentStyling";
import ProductContainer from "./components/ProductCard/ProductCard";
import ConditionalRendering from "./components/4-ConditionalRendering";
import List from "./components/5-RenderingList";

function App() {
  return (
    <>
      <Component></Component>
      <ConditionalRendering
        isUserLoggedIn={true}
        username="Gerome Davao"
      ></ConditionalRendering>
      <BooksContainer></BooksContainer>
      <List></List>
      <ProductContainer></ProductContainer>
    </>
  );
}

export default App;
