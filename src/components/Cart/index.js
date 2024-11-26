import React from 'react'
import './Cart.css'

const Cart = ({cartCount}) => (
  <div className="cart-container">
    <span className="cart-icon">🛒</span>
    <p className="cart-count">{cartCount}</p>
  </div>
)

export default Cart
