import './index.css'
const BrowserHistory = props => {
  const {eachItem, key} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  return (
    <li className="list-item">
      <div className="big-list-item-container">
        <div className="details-container">
          <p className="time">{timeAccessed}</p>
          <div className="image-heading-paragraph-container">
            <img src={logoUrl} className="logo" />
            <div>
              <h1 className="title">{title}</h1>
              <p className="domain-logo">{domainUrl}</p>
            </div>
          </div>
        </div>
        <button className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
