import './style.css'

const TabItem = ({tabItem, activeTab, changeTab}) => {
  const onClickTabButton = () => {
    changeTab(tabItem.menu_category_id)
  }

  return (
    <li
      className={
        activeTab === tabItem.menu_category_id
          ? 'tab-item-as-list active-tab'
          : 'tab-item-as-list'
      }
    >
      <button
        onClick={onClickTabButton}
        type="button"
        className="tab-item-as-list-button"
      >
        {tabItem.menu_category}
      </button>
    </li>
  )
}

export default TabItem
