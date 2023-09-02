import './index.css'

const SearchHistoryItems = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    console.log('HISTORY ITEM DELETED')
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="container5">
        <div className="container6">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="container7">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          type="button"
          onClick={onDelete}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchHistoryItems
