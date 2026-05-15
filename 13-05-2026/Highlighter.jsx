import { useState } from "react";
import "./styles.css";

const products = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Phone", price: 800 },
  { id: 103, name: "Headphones", price: 150 },
];

function Highlighter() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <ul style={{listStyleType: 'none'}}>
      {products.map((product) => (
        <li
          key={product.id}
          className={hoveredId === product.id ? "highlight" : ""}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}

export default Highlighter;