// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import GameInfo from './GameInfo.js'
// =============================
// COMPONENT CLASS
// =============================
class Aside extends React.Component {
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <aside>
              <div className="navigation">
                <h3>Start Menu</h3>

                <a className="button-green"
                onClick={() => { {this.props.handleView('home')} }}>Home</a>

                <a className="button-green"
                onClick={() => { {this.props.handleView('addPost')} }}>Add Review</a>
              </div>
              <div className="searchResults">
                {(this.props.game)
                    ? <GameInfo game={this.props.game} />
                    : null
                }
              </div>
            </aside>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Aside
