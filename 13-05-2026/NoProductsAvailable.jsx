// const products = [
//     { id: 101, name: "Laptop", price: 1200 },
//   { id: 102, name: "Phone", price: 800 },
//   { id: 103, name: "Headphones", price: 150 },
// ];

const products = [];

function NoProductsAvailable() {
  return (
    <div>
      {products.length > 0 ? (
        <ul style={{listStyleType : 'none'}}>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default NoProductsAvailable;