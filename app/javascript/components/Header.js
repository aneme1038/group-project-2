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
            {/* ======================== APP TITLE ======================== */}
            <h2 onClick={() => { {this.props.handleView('home')} }}>Gameplayce</h2>

            {/* ======================== ADD REVIEW ======================== */}
            <h5 onClick={() => { {this.props.handleView('addPost')} }}>Add Review</h5>

            {/* ======================== SEARCH FOR GAMES ======================== */}
            <div className="searchBar">
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
