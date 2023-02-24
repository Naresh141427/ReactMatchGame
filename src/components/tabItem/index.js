import './index.css'

const TabItem = props => {
  const {tabDetails, selectingTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickingTab = () => {
    selectingTab(tabId)
  }

  const className = isActive ? 'active-button' : ''

  return (
    <li className="tab-item">
      <button
        className={`button ${className}`}
        type="button"
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
