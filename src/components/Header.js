import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <header className="header">
          <div className="logo">
            <a href="#" className="logo__logo">
              <img src={LOGO_URL} alt="100" width="70" height="70" />
            </a>
            <div className="search">
              <a href="#" className="logo__home">
                Home
              </a>
            </div>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <a href="">Offers</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>

              <li>
                <a href="">User</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </header>
  );
};

export default Header;
