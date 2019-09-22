import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let { collection } = this.props
    return (
      <Card.Group itemsPerRow={6}>
        {
          collection.length ?
            collection.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
            : <h3>No Pokemon Found</h3>
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
