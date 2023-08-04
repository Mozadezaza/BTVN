import logo from './logo.svg';
import './App.css';
import Nav from './Navigation';
import Header from './Header';
// import { ProductContent } from './ProductContent';
import productData from './DataProduct';
import ProductContent from './ProductContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      {productData.map(products =>{
        <ProductContent
            key = {products.id}
            image = {products.image}
            sale = {products.sale}
            name = {products.name}
            rating = {products.rating}
            price = {products.price}
            button = {products.button}
        />
      })}
      <Footer/>
    </div>
  );
}

export default App;
