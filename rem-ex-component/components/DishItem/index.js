import {useState} from 'react'
import './style.css'

const DishItem = ({dish, onUpdateCart}) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
    onUpdateCart(1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
      onUpdateCart(-1)
    }
  }

  return (
    <li className="dish-item">
      <img src={dish.dish_image} alt={dish.dish_name} className="dish-image" />
      <div className="dish-details">
        <h3>{dish.dish_name}</h3>
        <p>{`${dish.dish_currency} ${dish.dish_price}`}</p>
        <p>{dish.dish_description}</p>
        <p>{`${dish.dish_calories} calories`}</p>
        <div className="count-controls">
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <span>{count}</span>
          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </li>
  )
}

export default DishItem
