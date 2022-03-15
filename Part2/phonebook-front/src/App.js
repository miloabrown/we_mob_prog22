import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Arto Hellas",
          number: "0401234567"
        }
      ],
      newName: "",
      newNumber: ""
    }
  }
  
  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }
  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({newNumber: event.target.value})
  }
  
  addContact = (event) => {
    event.preventDefault()
    
    const nameUsed = () => {
      alert("Name already in contacts")
      return this.state.people
    }

    if (this.state.newName !== "" && this.state.newNumber !== "") {
      const entryObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      const people = !(this.state.people.map(x => x.name).includes(entryObject.name)) ? this.state.people.concat(entryObject) : nameUsed()

      this.setState({
        people,
        newName: "",
        newNumber: ""
      })
    } else {
      alert("Please fill both forms")
    }
    
  }

  render() {
    return (
      <div>
        <div> 
          <h2>Phonebook</h2>
          <form onSubmit={this.addContact}>
            <div>
              Name: <input value={this.state.newName} onChange={this.handleNameChange} />
            </div>
            <div>
              Number: <input value={this.state.newNumber} onChange={this.handleNumberChange} />            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
          <h2>Contacts</h2>
          {this.state.people.map(person => <p key={person.name}>{person.name}: {person.number}</p>) }
        </div>
      </div>
    )
  }
}

export default App