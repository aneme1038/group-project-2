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
                <h3>Search Results</h3>
                <div>
                {(this.props.game)
                        ? <GameInfo
                        game={this.props.game}
                        handleView={this.props.handleView} />
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
