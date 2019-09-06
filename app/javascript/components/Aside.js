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
  render () {
    return (
      <aside>
        <h1>NAVIGATION SECTION</h1>
        <ul>
          <li onClick={() => {
            {this.props.handleView('home')}
          }}>home</li>
          <li onClick={() => {
            {this.props.handleView('addPost')}
          }}>add post</li>
          //ADD ANY MORE LINKS WE WANT TO ADD 
        </ul>
      </aside>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Aside
