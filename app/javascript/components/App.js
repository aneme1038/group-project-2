// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

//components
import Header from './Header.js'
import Aside from './Aside.js'
import Main from './Main.js'
import { userInfo } from 'os'

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
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <React.Fragment>

                {/* HEADER: INCLUDES LOGO */}
                <Header />

                {/* COMBO ASIDE AND MAIN DIVS */}
                <div className="main-aside">
                    {/* ASIDE INCLUDES NAVIGATION */}
                    <Aside
                        handleView={this.handleView}
                    />
                    {/* MAIN INCLUDES REVIEW POSTS */}
                    <Main
                        view={this.state.view}
                        handleView={this.handleView}
                        formInputs={this.state.formInputs}
                    />
                </div>

            </React.Fragment>
        )
    }
}

export default App