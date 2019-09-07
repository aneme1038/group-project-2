// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import Aside from './Aside.js'
// =============================
// COMPONENT CLASS
// =============================
class Header extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div>
        <Aside />
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Header
