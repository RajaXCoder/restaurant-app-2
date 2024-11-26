import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import TabItem from '../TabItem'
import DishItem from '../DishItem'
import Navbar from '../Navbar'

import './style.css'

const Home = () => {
  const [tabList, setTabList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('')
  const [dishQuantity, setDishQuantity] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
        )
        const data = await response.json()
        const tabs = data[0]?.table_menu_list || []
        setTabList(tabs)
        if (tabs.length > 0) {
          setActiveTab(tabs[0].menu_category_id)
        }
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const changeTab = id => {
    setActiveTab(id)
  }

  const onUpdateCart = count => {
    setDishQuantity(prevCount => Math.max(prevCount + count, 0))
  }

  const renderLoader = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#000" width="50" height="50" />
    </div>
  )

  const restaurantContainer = () => {
    const activeTabData = tabList.find(
      tab => tab.menu_category_id === activeTab,
    )
    const dishes = activeTabData?.category_dishes || []

    return (
      <div className="home-container">
        <ul className="tabs-container" role="tablist">
          {tabList.map(tab => (
            <TabItem
              key={tab.menu_category_id}
              tabItem={tab}
              activeTab={activeTab}
              changeTab={changeTab}
            />
          ))}
        </ul>
        <ul className="dishes-container">
          {dishes.map(dish => (
            <DishItem
              key={dish.dish_id}
              dish={dish}
              onUpdateCart={onUpdateCart}
            />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <Navbar cartCount={dishQuantity} />
      {isLoading ? renderLoader() : restaurantContainer()}
    </>
  )
}

export default Home
