import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductsLitst from "../../components/productsLitst/ProductsList";
import "./Home.css";

function Home({ addedToCart, setAddedToCart, addedProduct, setAddedProduct }) {
  return (
    <>
      <Navbar addedToCart={addedToCart} />
      <h1>Home page</h1>
      <ProductsLitst
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
        addedProduct={addedProduct}
        setAddedProduct={setAddedProduct}
      />
      <Footer />
    </>
  );
}

export default Home;
