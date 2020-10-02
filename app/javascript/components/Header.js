// ======================= DEPENDENCIES ======================= //
// ======================= DEPENDENCIES ======================= //

import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { IoMdSearch } from 'react-icons/io'

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
    const [isFormOpen, setIsFormOpen] = useState(false)

    function handleChange(event) {
        setUser({ [event.target.id]: event.target.value })
    }

    return (
        <div className="header-search">
            <header>
                <div className="container">
                    <h3>Gameplayce</h3>

                    <IconContext.Provider value={{ color: '#ffffff', size: '28px' }}>
                        <IoMdSearch onClick={() => {setIsFormOpen(!isFormOpen)}} />
                    </IconContext.Provider>
                    <button className="button--action">Add Review</button>
                </div>
            </header>

            {isFormOpen ? <div className="search-bar">
                <div className="container">
                    <form>
                        <label htmlFor="gameTitle">Search Games</label>

                        <input
                            type="text"
                            // onChange={this.props.handleChange}
                            placeholder="search for a game to review here"
                            // value={this.props.gameTitle}
                            id="gameTitle" />
                        <button type="submit" class="button--form">Find</button>
                        {/* <input type='submit' value="GO" /> */}
                    </form>
                    <span className="search-credit">Powered by <a href="https://www.giantbomb.com/api/" target="_blank">GiantBomb API</a></span>
                </div>
            </div> : null}
        </div>
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