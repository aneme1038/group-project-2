// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Header extends React.Component {

// ==============
// RENDER
// ==============
  render () {
    return (
        <header>
            <img src="https://i.imgur.com/ne4Inag.png" />
            {/* SEARCH FOR GAMES */}
            < div className="searchBar" >
                <form onSubmit={this.props.handleSearch}>
                    <label htmlFor='gameTitle'>Search Games</label>
                    <input type='text' onChange={this.props.handleChange}
                        value={this.props.gameTitle} id="gameTitle" />
                    <input type='submit' value='Search' />
                </form>
            </div >
        </header>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Header
