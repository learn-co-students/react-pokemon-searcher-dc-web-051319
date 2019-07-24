import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    side: "front"
  }

  flipImage = () => {
    if (this.state.side === "front") return this.setState({side: 'back'})
    this.setState({side: 'front'})
  }

  render() {

    const {pokemonObj} = this.props

    return (
      <Card onClick={this.flipImage}>
        <div>
          <div className="image">
            <img src={(this.state.side === "front") ? pokemonObj.sprites.front : pokemonObj.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemonObj.stats[pokemonObj.stats.length-1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
