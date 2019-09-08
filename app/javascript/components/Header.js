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
            <h2>Gameplayce</h2>
            {/* SEARCH FOR GAMES */}
            < div className="searchBar" >
                <form onSubmit={this.props.handleSearch}>
                    <label htmlFor='gameTitle'>Search Games</label>
                    <input type='text' onChange={this.props.handleChange}
                        value={this.props.gameTitle} id="gameTitle" />
                    <input type='submit' value="LET'S GO" />
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
