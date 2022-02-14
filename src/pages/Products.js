import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">product1</Link>
        </li>
        <li>
          <Link to="/products/p10">product2</Link>
        </li>
        <li>
          <Link to="/products/p15">product3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
