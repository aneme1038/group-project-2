// ======================= DEPENDENCIES ======================= //
// ======================= DEPENDENCIES ======================= //

import React, { useState } from 'react'
import { Header } from './Header'


//components

// import Aside from './Aside.js'
// import Main from './Main.js'
// import GameInfo from './GameInfo.js'
// import { render } from 'react-dom'
// require('dotenv').config()
// //
// //dotenv
// const APIKEY = process.env.REACT_APP_APIKEY
// // console.log(APIKEY)


// ======================= ENTIRE APP ======================= //
// ======================= ENTIRE APP ======================= //

export default function App() {
    const [api, setApi] = useState({
        start: 'https://cors-anywhere.herokuapp.com/giantbomb.com/api/search/?api_key=',
        apiKey: '99ce47c0aa4664d3f7c3a44949619e93e6ecbd1f',
        query: '&format=json&query=%22',
        gameTitle: '',
        end: '%22&resources=game'
    })
    const apiUrl = api.start + api.apiKey + api.query + api.gameTitle + api.end
    const apiCredit = 'Powered by the GiantBomb API'
    const [userInputs, setUserInputs] = useState({
        username: null,
        avatar: null,
        body: null,
        game: null,
        id: null
    })

    function searchGiantBomb(event) {
        console.log("Searching GiantBomb...")

        event.preventDefault()

        setApi({ gameTitle })


    }




    return (
        <>
            <Header />
        </>
    )
}



// handleSearch(event) {
//     console.log('this route works');
//     event.preventDefault()
//     this.setState({
//         searchURL: this.state.baseURL + this.state.apikey + this.state.format + this.state.query + this.state.gameTitle + this.state.endQuery + this.state.resources
//     }, () => {
//         fetch(this.state.searchURL)
//             .then(response => response.json())
//             .then(json => this.setState(
//                 {
//                     game: json,
//                     gameTitle: ''
//                 }), error => console.error(error))
//         //make a fetch request to the server for any reviews that match the game name/title
//     })
// }





// ==============
// HANDLERS
// ==============
// handles form change
// handleChange = (event) => {
//     this.setState({ [event.target.id]: event.target.value })
// }
//handles Submit of Form
// handleSubmit = (event) => {
//     event.preventDefault()
//     //if view is currently add Post (or whatever we call it )
//     if (this.props.view.page === 'addPost') {
//         //create post
//         this.props.handleCreate(this.state)
//     } else if (this.props.view.page === 'editPost') {
//         //else if the view is edit review
//         //update the review
//         this.props.handleUpdate(this.state)
//     }
//     console.log('Review Submitted');
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             view: {
//                 page: 'home',
//                 pageTitle: 'Find a game. Write a review.'
//             },
//             baseURL: 'https://cors-anywhere.herokuapp.com/giantbomb.com/api/search/?',
//             apikey: 'api_key=' + '99ce47c0aa4664d3f7c3a44949619e93e6ecbd1f',
//             format: '&format=json',
//             query: '&query=%22',
//             gameTitle: '',
//             endQuery: '%22',
//             resources: '&resources=game',
//             searchURL: ''
//         }
//         this.handleSearch = this.handleSearch.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }
//     // ==============
//     // HANDLERS
//     // ==============
//     //handle view state
//     handleView = (view, postData) => {
//         let pageTitle = ''
//         let userInputs = {
//             username: '',
//             avatar: '',
//             body: '',
//             game: '',
//             id: null
//         }
//         // decide the pageTitle based on the view
//         switch (view) {
//             case 'home':
//                 pageTitle = 'Find a game. Write a review.'
//                 break
//             case 'addPost':
//                 pageTitle = 'Just copy that game title over here. Why? Because we said so.'
//                 break
//             case 'editPost':
//                 pageTitle = 'Review again? Cool.'
//                 userInputs = {
//                     username: postData.username,
//                     avatar: postData.avatar,
//                     body: postData.body,
//                     game: postData.game,
//                     id: postData.id
//                 }
//                 break
//             default:
//                 break
//         }
//         //UPDATE STATE
//         this.setState({
//             view: {
//                 page: view,
//                 pageTitle: pageTitle
//             },
//             userInputs: userInputs
//         })
//     }
//     handleSearch(event) {
//         console.log('this route works');
//         event.preventDefault()
//         this.setState({
//             searchURL: this.state.baseURL + this.state.apikey + this.state.format + this.state.query + this.state.gameTitle + this.state.endQuery + this.state.resources
//         }, () => {
//             fetch(this.state.searchURL)
//                 .then(response => response.json())
//                 .then(json => this.setState(
//                     {
//                         game: json,
//                         gameTitle: ''
//                     }), error => console.error(error))
//             //make a fetch request to the server for any reviews that match the game name/title
//         })
//     }
//     handleChange(event) {
//         this.setState({ [event.target.id]: event.target.value })
//     }
//     // ==============
//     // RENDER
//     // ==============
//     render() {
//         return (
//             <React.Fragment >
//                 {/* HEADER: INCLUDES LOGO */}
//                 < Header
//                   handleSearch={this.handleSearch}
//                   handleChange={this.handleChange}
//                   handleView={this.handleView}
//                   gameTitle={this.state.gameTitle}
//                 />
//                 {/* COMBO ASIDE AND MAIN DIVS */}
//                 < div className="main-aside" >
//                     {/* MAIN INCLUDES REVIEW POSTS */}
//                     < Main
//                         view={this.state.view}
//                         handleView={this.handleView}
//                         userInputs={this.state.userInputs}
//                     />

//                     {/* ASIDE */}
//                     < Aside
//                         handleView={this.handleView}
//                         game={this.state.game}
//                     />
//                 </div>

//             </React.Fragment >
//         )
//     }
// }

// export default App