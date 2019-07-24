import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeHp = (event) => {
    this.setState({hp: event.target.value})
  }

  onChangeFront = (event) => {
    this.setState({frontUrl: event.target.value})
  }

  onChangeBack = (event) => {
    this.setState({backUrl: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({name: "", hp: "", backUrl: "", frontUrl: ""})
    this.props.handleSubmit({name: this.state.name, 
      stats: [{name: "hp", value: this.state.hp}], 
      sprites: {"front": this.state.frontUrl, "back": this.state.backUrl}
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onChangeName} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onChangeHp} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onChangeFront} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onChangeBack} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
