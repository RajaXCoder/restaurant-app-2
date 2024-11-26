import './style.css'

const TabItem = ({tabItem, activeTab, changeTab}) => {
  const onClickTabButton = () => {
    changeTab(tabItem.menu_category_id)
  }

  return (
    <li
      className={`tab-item ${
        activeTab === tabItem.menu_category_id ? 'active-tab' : ''
      }`}
    >
      <button
        type="button"
        onClick={onClickTabButton}
        className="tab-button"
        role="tab"
        aria-selected={activeTab === tabItem.menu_category_id}
      >
        {tabItem.menu_category}
      </button>
    </li>
  )
}

export default TabItem
