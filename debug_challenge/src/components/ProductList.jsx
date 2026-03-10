import "./ProductList.css";

function ProductList({ products }) {

  if (products.length === 0) {
    return <p className="empty">No products found</p>;
  }

  return (
    <div className="grid">

      {products.map((product) => (
        <div className="product-card" key={product.id}>

          <div className="icon">📦</div>

          <h3>{product.name}</h3>

          <p className="category">
            {product.category} • {product.subcategory}
          </p>

          <p className="price">₹{product.price}</p>

        </div>
      ))}

    </div>
  );
}

export default ProductList;