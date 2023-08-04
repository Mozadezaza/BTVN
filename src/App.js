import "./App.css";
import Nav from "./Navigation";
import Header from "./Header";
import productData from "./DataProduct";
import ProductContent from "./ProductContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productData.map((products) => {
              return (
                <ProductContent
                  key={products.id}
                  image={products.image}
                  sale={products.sale}
                  name={products.name}
                  rating={products.rating}
                  price={products.price}
                  priceOff={products.priceOff}
                  button={products.button}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
