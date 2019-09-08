// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

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
                <h1>Start Menu</h1>

                <a className="button-green"
                onClick={() => { {this.props.handleView('home')} }}>Home</a>

                <a className="button-green"
                onClick={() => { {this.props.handleView('addPost')} }}>Add Review</a>
              </div>
              <div className="searchResults">
              {(this.state.game)
                  ? <GameInfo game={this.state.game} />
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
