import {AiOutlineShoppingCart} from 'react-icons/ai'

import './style.css'

const Navbar = ({cartCount}) => (
  <nav className="nav-container">
    <ul>
      <li>
        <h1>UNI Resto Cafe</h1>
      </li>
      <li>
        <p>My Orders</p>
        <div className="cart-count-container">
          <AiOutlineShoppingCart size={22} />
          <span>{cartCount}</span>
        </div>
      </li>
    </ul>
  </nav>
)

export default Navbar
