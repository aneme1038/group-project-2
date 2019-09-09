//this file will support the form for posting reviews and editing reviews. 

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
            game: '',
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
      console.log(this.props.userInputs.username);
        this.setState({
            username: this.props.userInputs.username,
            avatar: this.props.userInputs.avatar,
            body: this.props.userInputs.body,
            game: this.props.userInputs.game,
            id: this.props.userInputs.id
        })
    }
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="user-info">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="your username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange} />

                    <label>Avatar</label>
                    <input
                        type="text"
                        placeholder="avatar url"
                        id="avatar"
                        value={this.state.avatar}
                        onChange={this.handleChange} />
                </div>

                <div className="user-info">
                    <label>Game Title</label>
                    <input
                        type="text"
                        placeholder="Game Title"
                        id="game"
                        onChange={this.handleChange}
                        value={this.state.game}/>
                </div>

                <label id="post-form">Review</label>
                <textarea
                    placeholder="review game"
                    id="body"
                    value={this.state.body}
                    onChange={this.handleChange}></textarea>

                <input type="submit" value="Add Review" className="button" />
            </form>
        )
    }
}
export default Form
