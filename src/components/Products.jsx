import "./Products.css"
export default function Products() {
  const products = [
    { image:"/public/images/coffee", id: 1, name: "Coffee", price: 30 },
    { id: 2, name: "Pizza", price: 40 },
    { id: 3, name: "Mocktails", price: 45 },
    { id: 4, name: "Breads", price: 95 },
    { id: 5, name: "Pasta", price: 70 },
    { id: 6, name: "Cheesecakes", price: 25 },
  ];
  return (
    <div>
      <div className="App-Products-Row">
        {products.map((value, index) => (
          <div className="App-Products-Box" key={index}>
            <img src={value.image} alt={value.name} className="Product-Image" />
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <button>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  );
}