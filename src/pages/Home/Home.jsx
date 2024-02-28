import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductsLitst from "../../components/productsLitst/ProductsList";
import "./Home.css";


function Home() {

  return (
    <>
      <Navbar />
      <h1>Home page</h1>
      <ProductsLitst/>
      <Footer />
    </>
  );
}

export default Home;
