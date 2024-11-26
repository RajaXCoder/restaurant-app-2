import {useState} from 'react'

// import {FaMinus, FaPlus} from 'react-icons/fa'

import './style.css'

const DishItem = ({dish, onUpdateCart}) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
    onUpdateCart(1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
      onUpdateCart(-1)
    }
  }

  // console.log(nexturl)
  return (
    <li className="dish-item">
      <div className="dish-main-container">
        <img src={dish.nexturl} alt="type" className="category-item-image" />
        <div className="dish-item-details-container">
          <h3>{dish.dish_name}</h3>
          <p className="price">{`${dish.dish_currency} ${dish.dish_price}`}</p>
          <p className="description">{dish.dish_description}</p>
          {dish.dish_Availability ? (
            <div className="count-container">
              <button type="button" onClick={handleDecrement}>
                -
              </button>
              <span>{count || 0}</span>
              <button type="button" onClick={handleIncrement}>
                +
              </button>
            </div>
          ) : null}
          {dish.addonCat.length > 0 && (
            <p className="availability">Customizations available</p>
          )}
          {!dish.dish_Availability ? (
            <p className="not-availability">Not available</p>
          ) : null}
        </div>
      </div>
      <p className="calories">{`${dish.dish_calories} calories`}</p>
      <img className="dish-image" src={dish.dish_image} alt="name" />
    </li>
  )
}

export default DishItem
