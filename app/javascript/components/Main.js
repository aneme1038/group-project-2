// =============================
// DEPENDENCIES
// =============================

//packages
import React from 'react'

//components
import Post from './Post.js'
import Form from './Form.js'

// =============================
// COMPONENT CLASS
// =============================
class Main extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor(props){
    super(props)
    this.state  = {
      posts: []
    }
  }
  // ==============
  // HANDLERS
  // ==============
  fetchPosts = () => {
    fetch('/api/posts')
      .then(data => data.json())
      .then(jData => {
        this.setState({ posts: jData})
      })
  }

  handleCreate = (createData) => {
    fetch('/api/posts', {
      body: JSON.stringify(createData),
      method: 'Post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdPost => {
        return createdPost.json()
      })
      .then(jsonedPost => {
        //change to home view
        this.props.handleView('home')
        this.setState(prevState => {
          prevState.posts.push(jsonedPost)
          return { posts: prevState.posts}
        })
      })
      .catch(error => console.log(error))
  }
  handleUpdate = (updateData) => {
    fetch(`/api/posts/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedPost => {
      this.props.handleView('home')
      this.fetchPosts()
    })
    .catch(error => console.log(error))
  }
  handleDelete = (id) => {
    fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(json => {
      this.setState(prevState => {
        const posts = prevState.posts.filter(post => post.id !== id)
        return {posts}
      })
    })
    .catch(error => console.log(error))
  }
  // ==============
  // LIFE CYCLES
  // ==============
  componentDidMount(){
    this.fetchPosts()
  }
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <main>
        <h3>{this.props.view.pageTitle}</h3>
        { this.props.view.page === 'home'
          ? this.state.posts.map((postData) => (
        <Post
          key={postData.id}
          postData={postData}
          handleView={this.props.handleView}
          handleDelete={this.handleDelete}
        />
          ))
        : <Form
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          userInputs={this.props.userInputs}
          view={this.props.view}
        />
          }
      </main>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Main