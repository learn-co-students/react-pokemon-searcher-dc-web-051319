import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardFront: true
  }

  // needs arrow function to know what "this" is
  handleImgClick = () => {
    this.setState(prevState => ({
      cardFront: !prevState.cardFront
    }))
  }

  render() {
    const { pokemon } = this.props
    const { front: spriteFront, back: spriteBack } = pokemon.sprites

    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleImgClick} src={this.state.cardFront ? spriteFront : spriteBack} alt={pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
