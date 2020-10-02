// ======================= DEPENDENCIES ======================= //
// ======================= DEPENDENCIES ======================= //

import React, { useState } from 'react'

// ======================= HEADER FUNCTION ======================= //
// ======================= HEADER FUNCTION ======================= //

export function Header() {
    // const [user, setUser] = useState({
    //     username: '',
    //     avatar: '',
    //     body: '',
    //     game: '',
    //     id: null
    // })

    function handleChange(event) {
        setUser({ [event.target.id]: event.target.value })
    }

    // function handleSubmit(event) {
    //     event.preventDefault()


    // }

    return (
        <header>
            <div className="container">
                <h3>Gameplayce</h3>

                <button className="button--action">Add Review</button>
            </div>
        </header>
    )
}

// =============================
// COMPONENT CLASS
// =============================
// class Header extends React.Component {

// ==============
// RENDER
// ==============
//   render () {
//     return (
//         <header>
//             {/* ======================== APP TITLE ======================== */}
//             <h1 onClick={() => { {this.props.handleView('home')} }}>Gameplayce</h1>

//             {/* ======================== ADD REVIEW ======================== */}
//             <h4 onClick={() => { {this.props.handleView('addPost')} }}>Add Review</h4>

//             {/* ======================== SEARCH FOR GAMES ======================== */}
//             <div className="searchBar">
//                 <form onSubmit={this.props.handleSearch}>
//                     <label htmlFor='gameTitle'>Search Games</label>
//                     <input
//                     type='text'
//                     onChange={this.props.handleChange}
//                     placeholder="search for a game to review here"
//                     value={this.props.gameTitle}
//                     id="gameTitle" />
//                     <input type='submit' value="GO" />
//                 </form>
//             </div >
//         </header>
//     )
//   }
// }

// // =============================
// // EXPORT
// // =============================
// export default Header

// handleSearch -> searchGiantBomb

    // <form onSubmit={this.handleSubmit}> */}
    //             <div className="user-info">
    //                 <label>Username</label>
    //                 <input
    //                     type="text"
    //                     placeholder="your username"
    //                     id="username"
    //                     value={this.state.username}
    //                     onChange={this.handleChange} />

    //                 <label>Avatar</label>
    //                 <input
    //                     type="text"
    //                     placeholder="avatar url"
    //                     id="avatar"
    //                     value={this.state.avatar}
    //                     onChange={this.handleChange} />
    //             </div>

    //             <div className="user-info">
    //                 <label>Game Title</label>
    //                 <input
    //                     type="text"
    //                     placeholder="game title"
    //                     id="game"
    //                     onChange={this.handleChange}
    //                     value={this.state.game}/>
    //             </div>

    //             <label id="post-form">Review</label>
    //             <textarea
    //                 placeholder="review game"
    //                 id="body"
    //                 value={this.state.body}
    //                 onChange={this.handleChange}></textarea>

    //             <input type="submit" value="Add Review" className="button" />
    //         </form>