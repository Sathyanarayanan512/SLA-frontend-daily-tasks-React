import FilterProducts from "./Day 39/15-05-2026/FilterProducts";
import Highlighter from "./Day 39/15-05-2026/Highlighter";
import NoProductsAvailable from "./Day 39/15-05-2026/NoProductsAvailable";
import ProductList from "./Day 39/15-05-2026/ProductList";

function App(){
    return (
        <>
          <h1>Products List</h1>
          <ProductList/>
          <h1>No Products Available</h1>
          <NoProductsAvailable/>
          <h1>Filter Products</h1>
          <FilterProducts/>
          <h1>Hover to Highlighter</h1>
          <Highlighter/>
        </>
    )
}

export default App