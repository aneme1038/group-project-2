import React from 'react'

class GameInfo extends React.Component {
  render () {
    console.log(this.props.game.results[0]);
    return (
      <div className="results">
          <h1>{this.props.game.results[0].name}</h1>

          <div className="image-description">
            <img src={this.props.game.results[0].image.small_url}/>
            <p>Description: {this.props.game.results[0].deck}</p>
          </div>        
      </div>
    )
  }
}

export default GameInfo