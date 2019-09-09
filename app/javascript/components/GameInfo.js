import React from 'react'
class GameInfo extends React.Component {
  render () {
    console.log(this.props.game.results);
    return (
      <div className="results">
          {/* thanks for the help, ross. You get your very own key. —addison */}
         {this.props.game.results.map((game, ross) => {
            return (
                <div className="game-results" key={ross}>
                    <h4>{game.name}</h4>
                    <a className="button blue"
                    onClick={() => { {this.state.handleView('addPost')} }}>
                        Review This Game
                    </a>

                    <div className="image-description">
                        <img src={game.image.small_url} />
                        <p>Description: {game.deck}</p>
                    </div>
                </div>
            )
         })}    
      </div>
    )
  }
}
export default GameInfo