import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    filteredPokemon: [],
    searchInput: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => this.setState({allPokemon: pokemons, filteredPokemon: pokemons}))
  }

  searchAllPokemon = (event) => {
    this.setState({searchInput: event.target.value, filteredPokemon: this.state.allPokemon.filter(pokemon => {
      return pokemon.name.includes(event.target.value)
    })})        
  }

  handleSubmit = (pokemonObj) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(resp => resp.json())
    .then(newPokemon => {
      this.setState({searchInput: "", allPokemon: [...this.state.allPokemon, newPokemon]})
    })
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search value={this.state.searchInput} onSearchChange={this.searchAllPokemon} 
        showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.filteredPokemon}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
