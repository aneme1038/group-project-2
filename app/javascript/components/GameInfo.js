import React from 'react'

class GameInfo extends React.Component {
  render () {
    console.log(this.props.game.results[0]);
    return (
      <div>
        <img src={this.props.game.results[0].image.icon_url}/>
        <h1>Name: {this.props.game.results[0].name}</h1>
        Description: {this.props.game.results[0].deck}
      </div>
    )
  }
}


export default GameInfo
