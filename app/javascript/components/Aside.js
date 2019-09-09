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
                {(this.props.game)
                        ? <GameInfo game={this.props.game} />
                        : null
                    }
            </aside>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Aside
