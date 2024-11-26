import React, {useState} from 'react'
import './DishCard.css'

const DishCard = ({dish, quantity, onIncrement, onDecrement}) => {
  const [dishcount, setDishCount] = useState(0)

  const clickMinus = () => {
    if (dishcount > 0) {
      onDecrement()
      setDishCount(dishcount - 1)
    }
  }

  const clickPlus = () => {
    onIncrement()
    setDishCount(dishcount + 1)
  }

  return (
    <div className={`dish-card ${!dish.dish_Availability && 'not-available'}`}>
      <div className="dish-details-containter">
        <h3 className="dish-name">{dish.dish_name}</h3>
        <p className="dish-price">{`${dish.dish_currency} ${dish.dish_price}`}</p>
        <p className="dish-description">{dish.dish_description}</p>
        <p className="dish-calories">{dish.dish_calories} calories</p>

        {dish.dish_Availability && (
          <div className="dish-actions">
            <button
              className="quantity-btn"
              onClick={clickMinus}
              type="button"
              disabled={dishcount === 0}
            >
              -
            </button>
            <p className="quantity-count">{dishcount}</p>
            <button className="quantity-btn" onClick={clickPlus} type="button">
              +
            </button>
          </div>
        )}
        {dish.addonCat?.length > 0 && (
          <p className="dish-customization">Customizations available</p>
        )}
        {!dish.dish_Availability && (
          <p className="dish-availability">Not available</p>
        )}
      </div>
      <img src={dish.dish_image} alt={dish.dish_name} className="dish-image" />
    </div>
  )
}
export default DishCard
