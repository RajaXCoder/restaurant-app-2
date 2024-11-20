import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import TabItem from '../TabItem'
import DishItem from '../DishItem'
import Navbar from '../Navbar'

import './style.css'

const Home = () => {
  const [tablist, setTabList] = useState([])
  const [isloader, setLoader] = useState(false)
  const [activeTab, setActiveTab] = useState('')
  const [dishQuantity, setDishQuantity] = useState(0)

  useEffect(() => {
    const apiCall = async () => {
      const responce = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await responce.json()
      // console.log(data[0])
      setTabList(data[0].table_menu_list)
      const {menu_category_id: activdId} = data[0].table_menu_list[0]
      setActiveTab(activdId)
      setLoader(true)
    }

    apiCall()
    console.log('effect')
  }, [])

  // console.log(tablist)

  const changeTab = id => {
    setActiveTab(id)
  }

  const onUpdateCart = count => {
    setDishQuantity(prevCount => prevCount + count)
  }

  const restaurantContainer = () => {
    const filterObj = tablist.filter(
      each => each.menu_category_id === activeTab,
    )

    const filterArr = filterObj[0].category_dishes
    console.log(filterArr)

    return (
      <div className="home-container">
        <ul className="tabs-container">
          {tablist.map(each => (
            <TabItem
              activeTab={activeTab}
              key={each.menu_category_id}
              tabItem={each}
              changeTab={changeTab}
            />
          ))}
        </ul>
        <ul className="dishes-container">
          {filterArr.map(each => (
            <DishItem
              onUpdateCart={onUpdateCart}
              key={each.dish_id}
              dish={each}
            />
          ))}
        </ul>
      </div>
    )
  }

  const loaderContainer = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#000" width="50px" height="50px" />
    </div>
  )

  return (
    <>
      <Navbar cartCount={dishQuantity} />

      {isloader ? restaurantContainer() : loaderContainer()}
    </>
  )
}

export default Home
