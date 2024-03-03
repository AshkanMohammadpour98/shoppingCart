import "./Navbar.css";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {

  const addedToCart = useSelector( store => store.addedToCart)


  return (
    <nav>
      <p>
        <Link to='/'>Home</Link>
      </p>
      <p className="bag">
        <Link to="/cart"><GiShoppingCart size="35px" color="#ffff" /></Link>
        {addedToCart > 0 && <span>{addedToCart}</span>}
      </p>
    </nav>
  );
}

export default Navbar;
