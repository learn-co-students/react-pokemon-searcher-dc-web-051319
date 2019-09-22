import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import loader from '../loader.gif'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    loading: true,
    allPokemon: [],
    searchTerm: ""
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(allPokemon => {
        this.setState({
          loading: false,
          allPokemon: allPokemon
        })
      })
  }

  render() {
    let { loading, allPokemon, searchTerm } = this.state
    let filteredPokemon = allPokemon.filter(pokemon => pokemon.name.includes(searchTerm))

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 100)} showNoResults={false} />
        <br />
        {loading ? <img src={loader} /> : <PokemonCollection collection={filteredPokemon} />}
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
