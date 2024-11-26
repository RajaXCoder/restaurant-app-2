import React from 'react'
import './Header.css'

const Header = ({restaurantName, cartCount}) => (
  <header className="header">
    <h1 className="restaurant-name">{restaurantName || 'UNI Resto Cafe'}</h1>
    <p className="header-orders">My Orders</p>
    <div className="cart">
      <button className="cart-icon">Cart: {cartCount}</button>
    </div>
  </header>
)

export default Header
