// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
//components
import Header from './Header.js'
import Aside from './Aside.js'
import Main from './Main.js'
// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: {
                page: 'home',
                pageTitle: 'Gamespayce'
            },
            userInputs: {
                username: null,
                avatar: null,
                body: null,
                id: null
            }
        }
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
            id: null
        }
        //decide pageTitle based on view
        /////
        //SWITCH STATEMENT HERE
        //////

        //UPDATE STATE
        this.setState({
            view: {
                page: view,
                pageTitle: pageTitle
            },
            userInputs: userInputs
        })
    }
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <React.Fragment>
                <Header />

                <div className="main-aside">
                    <Aside />
                    <Main />
                </div>
            </React.Fragment>
        )
    }
}

export default App
