// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

//components
import Header from './Header.js'
import Aside from './Aside.js'
import Main from './Main.js'
import GameInfo from './GameInfo.js'
import { userInfo } from 'os'
// require('dotenv').config()
//
// //dotenv
// const APIKEY = process.env.APIKEY
// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: {
                page: 'home',
                pageTitle: 'Game Reviews'
            },
            userInputs: {
                username: null,
                avatar: null,
                body: null,
                game: null,
                id: null
            },
            baseURL: 'https://cors-anywhere.herokuapp.com/giantbomb.com/api/search/?',
            apikey: 'api_key=' + '99ce47c0aa4664d3f7c3a44949619e93e6ecbd1f',
            format: '&format=json',
            query: '&query=%22',
            gameTitle: '',
            resources: '%22resources=game',
            searchURL: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    // ==============
    // HANDLERS
    // ==============
    //handle view state
    handleView = (view, postData) => {
        let pageTitle = ''
        let userInputs = {
            username: '',
            avatar: '',
            body: '',
            game: '',
            id: null
        }
        // decide the pageTitle based on the view
        switch (view) {
            case 'home':
                pageTitle = 'Game Reviews'
                break
            case 'addPost':
                pageTitle = 'Add Review'
                break
            case 'editPost':
                pageTitle = 'Review again? Cool.'
                userInputs = {
                    username: postData.username,
                    avatar: postData.avatar,
                    body: postData.body,
                    game: postData.game,
                    id: postData.id
                }
                break
            default:
                break
        }
        //UPDATE STATE
        this.setState({
            view: {
                page: view,
                pageTitle: pageTitle
            },
            userInputs: userInputs
        })
    }
    handleSearch(event) {
        console.log('this route works');
        event.preventDefault()
        this.setState({
            searchURL: this.state.baseURL + this.state.apikey + this.state.format + this.state.query + this.state.gameTitle + this.state.resources
        }, () => {
            fetch(this.state.searchURL)
                .then(response => response.json())
                .then(json => this.setState(
                    {
                        game: json,
                        gameTitle: ''
                    }), error => console.error(error))
        })
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <React.Fragment >

                {/* HEADER: INCLUDES LOGO */}
                < Header
                  handleSearch={this.handleSearch}
                  handleChange={this.handleChange}
                  gameTitle={this.state.gameTitle}
                />
                {/* COMBO ASIDE AND MAIN DIVS */}
                < div className="main-aside" >
                    {/* ASIDE INCLUDES NAVIGATION */}
                    < Aside
                        handleView={this.handleView}
                        game={this.state.game}
                    />
                    {/* MAIN INCLUDES REVIEW POSTS */}
                    < Main
                        view={this.state.view}
                        handleView={this.handleView}
                        userInputs={this.state.userInputs}
                    />
                </div>

            </React.Fragment >
        )
    }
}

export default App



            // games: {
            //     gameTitle: null,
            //     category: null,
            //     rating: null,
            //     summary: null,
            //     coverImage: null
            // },
            // https://cors-anywhere.herokuapp.com/
