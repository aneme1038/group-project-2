//This file will handle the main posting from the form of the various reviews users make 

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
                    <h4>@{this.props.postData.username} reviewed
                        <span className="gamename"> {this.props.postData.game}</span></h4>
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
