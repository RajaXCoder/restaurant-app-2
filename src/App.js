import React, {useState, useEffect} from 'react'

import fetchMenuData from './api'

import MenuCategory from './components/MenuCategory'
import DishCard from './components/DishCard'
import Cart from './components/Cart'

import './App.css'

const App = () => {
  const [restaurantName, setRestaurantName] = useState('')
  const [categories, setCategories] = useState([])
  const [apiData, setApiData] = useState([])
  const [dishes, setDishes] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  const [dishQuantities, setDishQuantities] = useState({})
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMenuData()
      console.log(data[0])

      setApiData(data[0].table_menu_list)

      if (data[0]?.table_menu_list?.length) {
        setRestaurantName(data[0].restaurant_name)

        const initialCategories = data[0].table_menu_list.map(
          item => item.menu_category,
        )
        setCategories(initialCategories)
        setActiveCategory(initialCategories[0])

        const initialDishes = data[0].table_menu_list[0].category_dishes
        setDishes(initialDishes)

        const initialQuantities = initialDishes.reduce((acc, dish) => {
          acc[dish.dish_id] = 0
          return acc
        }, {})
        setDishQuantities(initialQuantities)
      }
    }

    fetchData()
  }, [])

  const handleCategoryClick = category => {
    setActiveCategory(category)
    // console.log(categories)
    const filterData = apiData.filter(each => each.menu_category === category)
    // console.log(filterData)
    setDishes(filterData[0].category_dishes)
  }

  const handleIncrement = dishId => {
    setDishQuantities(prev => ({
      ...prev,
      [dishId]: prev[dishId] + 1,
    }))
    setCartCount(prev => prev + 1)
  }

  const handleDecrement = dishId => {
    setDishQuantities(prev => {
      const updatedCount = Math.max(prev[dishId] - 1, 0)
      return {...prev, [dishId]: updatedCount}
    })
    setCartCount(prev => Math.max(prev - 1, 0))
  }

  return (
    <div className="app">
      <header>
        <h1>{restaurantName || 'Loading...'}</h1>
        <div>
          <p>My Orders</p>
          <Cart cartCount={cartCount} />
        </div>
      </header>
      <div className="categories">
        {categories.map((category, index) => (
          <MenuCategory
            key={category}
            category={category}
            isActive={category === activeCategory}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
      <div className="dishes">
        {dishes.map(dish => (
          <DishCard
            key={dish.dish_id}
            dish={dish}
            quantity={dishQuantities[dish.dish_id]}
            onIncrement={() => handleIncrement(dish.dish_id)}
            onDecrement={() => handleDecrement(dish.dish_id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
