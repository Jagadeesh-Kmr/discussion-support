// Write your JS code here
import './index.css'

const Header = () => (
  <navbar className="nav-bar">
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-img"
      />
      <ul className="header-list">
        <li to="/" className="header-heading">
          Home
        </li>
        <li to="/products" className="header-heading">
          Products
        </li>
        <li to="/cart" className="header-heading">
          Cart
        </li>
        <button type="button" className="header-btn">
          Logout
        </button>
      </ul>
    </div>
  </navbar>
)

export default Header
