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
            <h1 onClick={() => { {this.props.handleView('home')} }}>Gameplayce</h1>

            {/* ======================== ADD REVIEW ======================== */}
            <h4 onClick={() => { {this.props.handleView('addPost')} }}>Add Review</h4>

            {/* ======================== SEARCH FOR GAMES ======================== */}
            <div className="searchBar">
                <form onSubmit={this.props.handleSearch}>
                    <label htmlFor='gameTitle'>Search Games</label>
                    <input
                    type='text'
                    onChange={this.props.handleChange}
                    placeholder="search for a game to review here"
                    value={this.props.gameTitle}
                    id="gameTitle" />
                    <input type='submit' value="GO" />
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
