//this file will handle the api game info coming in from fetch call.

//Dependancies
import React from 'react'
//components
class GameInfo extends React.Component {
  render () {
    console.log(this.props.game.results);
    return (
      <div className="search-results">
          {/* thanks for the help, ross. You get your very own key. —addison */}
         {this.props.game.results.map((game, ross) => {
            return (
                <div className="game-card" key={ross}>
                    <h3 className="sand-text">{game.name}</h3>
                    <a className="button blue"
                    onClick={() => { {this.props.handleView('addPost')} }}>
                        Review Game
                    </a>

                    <div className="image-description">
                        <img src={game.image.small_url} />
                        <p className="sand-text">{game.deck}</p>
                    </div>
                </div>
            )
         })}
      </div>
    )
  }
}
export default GameInfo
