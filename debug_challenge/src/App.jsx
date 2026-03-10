import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "iPhone 15", category: "Electronics", subcategory: "Mobile", price: 80000 },
  { id: 2, name: "Samsung Galaxy S23", category: "Electronics", subcategory: "Mobile", price: 65000 },
  { id: 3, name: "iPad Air", category: "Electronics", subcategory: "Tablet", price: 55000 },
  { id: 4, name: "Sony Headphones", category: "Electronics", subcategory: "Headphones", price: 5000 },
  { id: 5, name: "MacBook Air", category: "Electronics", subcategory: "Laptop", price: 95000 },

  { id: 6, name: "Men T-shirt", category: "Clothing", subcategory: "Men", price: 800 },
  { id: 7, name: "Women Dress", category: "Clothing", subcategory: "Women", price: 1500 },

  { id: 8, name: "Coffee Mug", category: "Home", subcategory: "Kitchen", price: 300 },
  { id: 9, name: "Wall Clock", category: "Home", subcategory: "Decor", price: 1200 }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="app">
      <header className="header">
        <h1>🛍 Product Explorer</h1>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
        </select>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;