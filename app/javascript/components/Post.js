// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Post extends React.Component {
    // ==============
    // RENDER
    // ==============
    render() {
        return (
            <article>
                <div className="post-header">
                    <h2>Review by <span className="username">{this.props.postData.username}</span></h2>
                    <img src={this.props.postData.avatar} alt="" />
                </div>

                <p>{this.props.postData.body}</p>
                
                <div className="post-options">
                <a className="button-blue"
                    onClick={() => {this.props.handleView('editPost', this.props.postData)}}>
                        Edit Review
                    </a>
                    <a className="button-red"
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