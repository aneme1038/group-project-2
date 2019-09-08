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
                <form onSubmit={this.handleSearch}>
                    <label htmlFor='gameTitle'>Search Games</label>
                    <input type='text' onChange={this.handleChange}
                        value={this.state.gameTitle} id="gameTitle" />
                    <input type='submit' value='Search' />
                </form>
            </div >

            {(this.state.game)
                ? <GameInfo game={this.state.game} />
                : null
            }
        </header>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Header
