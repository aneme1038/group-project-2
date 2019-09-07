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
                pageTitle: 'Gameplayce'
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
                formInputs = {
                    username: postData.name,
                    avatar: postData.image,
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
                    <Aside />
                    {/* MAIN INCLUDES REVIEW POSTS */}
                    <Main />
                </div>

            </React.Fragment>
        )
    }
}

export default App