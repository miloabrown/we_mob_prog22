import React from "react"
import ReactDOM from "react-dom"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     counter: 0 
    }
  }

  setValue = (value) => 
    () => {
      this.setState({counter: value})
    }
  

  render = () => {
    return (
      <div>
        <div><Display counter={this.state.counter}/></div>
        <div>
          <Button handleClick={this.setValue(this.state.counter + 1)} text="Add" />
          <Button handleClick={this.setValue(this.state.counter - 1)} text="Subtract" />
        </div>
        <div>
          <Button handleClick={this.setValue(0)} text="Reset" />
        </div>
      </div>
    )
  }
}
const Display = ({ counter }) => <h1>{counter}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
