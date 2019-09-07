// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
    // ==============
    // STATE
    // ==============
    constructor() {
        super()
        this.state = {
            username: '',
            avatar: '',
            body: '',
            id: null
        }
    }
    // ==============
    // HANDLERS
    // ==============
    // handles form change
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    //handles Submit of Form
    handleSubmit = (event) => {
        event.preventDefault()
        //if view is currently add Post (or whatever we call it )
        if (this.props.view.page === 'addPost') {
            //create post
            this.props.handleCreate(this.state)
        } else if (this.props.view.page === 'editPost') {
            //else if the view is edit review
            //update the review
            this.props.handleUpdate(this.state)
        }
        console.log('Review Submitted');
    }
    // ===============
    //  LIFECYCLES
    // ===============
    componentDidMount() {
        this.setState({
            username: this.props.userInputs.username,
            avatar: this.props.userInputs.avatar,
            body: this.props.userInputs.body,
            id: this.props.userInputs.id
        })
    }
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Post Review" />
            </form>
        )
    }
}
export default Form