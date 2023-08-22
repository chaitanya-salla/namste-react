import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <header className="header">
          <div className="logo">
            <Link to="/" className="logo__logo">
              <img src={LOGO_URL} alt="100" width="70" height="70" />
            </Link>
            <div className="search">
              <Link to="/" className="logo__home">
                Home
              </Link>
            </div>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Offers</Link>
              </li>
              <li>
                <Link to={"/help"}>Help</Link>
              </li>

              <li>
                <Link to="/">Chaitha...</Link>
              </li>
              <li>
                <Link to="/">Cart</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </header>
  );
};

export default Header;
