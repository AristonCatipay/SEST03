import styles from "./ProductCard.module.css";

function ProductContainer() {
  return (
    <div>
      <ProductCard name="Laptop" price={1000}></ProductCard>
      <ProductCard name="Keyboard" price={200}></ProductCard>
      <ProductCard name="Monitor" price={500}></ProductCard>
    </div>
  );
}

export default ProductContainer;

function ProductCard({ name, price }) {
  return (
    <div className={styles.card}>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
    </div>
  );
}
