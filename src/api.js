const fetchMenuData = async () => {
  const API_URL =
    'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details' // Replace with actual URL
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export default fetchMenuData
