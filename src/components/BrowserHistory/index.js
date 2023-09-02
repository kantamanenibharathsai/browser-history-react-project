import {Component} from 'react'

import SearchHistoryItems from '../SearchHistoryItems'

import './index.css'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    console.log('props in constructor')
    console.log(this.props)
    console.log(props)
    const {HistoryList} = this.props
    this.state = {searchInput: '', currentHistoryList: HistoryList}
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistoryItem = id => {
    console.log(id)
    const {currentHistoryList} = this.state
    const filteredHistory = currentHistoryList.filter(each => each.id !== id)
    this.setState({
      currentHistoryList: filteredHistory,
    })
  }

  render() {
    const {searchInput, currentHistoryList} = this.state
    // const {HistoryList} = this.props

    const filteredResults = currentHistoryList.filter(eachHistoryObj =>
      eachHistoryObj.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(filteredResults)
    console.log('render function called')
    return (
      <>
        <div className="container1">
          <div className="container2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="website-logo"
            />
            <div className="container3">
              <button
                onClick={this.onDeleteSearchItem}
                type="button"
                className="search-logo-button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </button>
              <input
                placeholder="Search history"
                type="search"
                className="search-input-element"
                onChange={this.onChangeSearchInput}
                //  value={event.target.value}
              />
            </div>
          </div>
        </div>
        {filteredResults.length === 0 ? (
          <div className="empty-view">
            <p>There is no history to show</p>
          </div>
        ) : (
          <div className="container4">
            <ul className="unordered-list-container">
              {filteredResults.map(eachHistoryObject => {
                console.log('rendering 1 item')
                return (
                  <SearchHistoryItems
                    key={eachHistoryObject.id}
                    historyItem={eachHistoryObject}
                    deleteHistoryItem={this.deleteHistoryItem}
                  />
                )
              })}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default BrowserHistory
