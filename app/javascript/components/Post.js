//This file will handle the main posting from the form of the various reviews users make and post it to body.

// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASSrif
// =============================
class Post extends React.Component {
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <article>
                <div className="post-header">
                    <h3><span className="blue-text">{this.props.postData.username}</span> reviewed
                        <span className="blue-text"> {this.props.postData.game}</span></h3>
                    <img src={this.props.postData.avatar} alt="" />
                </div>

                <p>{this.props.postData.body}</p>

                <div className="post-options">
                <a className="button blue"
                    onClick={() => {this.props.handleView('editPost', this.props.postData)}}>
                        Edit Review
                    </a>
                    <a className="button red"
                    onClick={() => {this.props.handleDelete(this.props.postData.id)}}>
                        Delete Review
                    </a>
                </div>
            </article>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Post
