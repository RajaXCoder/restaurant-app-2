import './Menu.css'

const MenuCategory = ({category, isActive, onClick}) => (
  <button
    className={`category-button ${isActive ? 'active' : ''}`}
    type="button"
    onClick={onClick}
  >
    {category}
  </button>
)

export default MenuCategory
