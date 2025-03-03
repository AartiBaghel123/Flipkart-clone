import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Flipkart Clone</h2>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
