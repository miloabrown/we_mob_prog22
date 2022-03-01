import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }
  setValue = (variable) => {
    return () => {
      this.setState({[variable]: this.state[variable] +1})
    }
  }

  render = () => {
    return (
      <div>
        <h1>Give us feedback</h1>
        <div>
          <Button handleClick={this.setValue("good")} text="Good"/>
          <Button handleClick={this.setValue("neutral")} text="Neutral"/>
          <Button handleClick={this.setValue("bad")} text="Bad"/>
        </div>
        <Stats results={this.state}/>
      </div>
    )
  }
}
const Stats = ({ results }) => {
  const sum = (results.good + results.neutral + results.bad);
  return (sum != 0 ?
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <tr>
          <td>Good</td>
          <td>{results.good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{results.neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{results.bad}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{sum == 0 ? 0 : (Math.round(((results.good - results.bad) / sum) * 10) / 10)}</td>
        </tr>
        <tr>
          <td>Positives</td>
          <td>{sum == 0 ? 0 : (Math.round(((results.good / sum) * 100) * 10) / 10)}%</td>
            </tr>
        </tbody>
      </table>

      {/* <div>
        <Statistic name="Good" stat={results.good} />
        <Statistic name="Neutral" stat={results.neutral} />
        <Statistic name="Bad" stat={results.bad} />
        <Statistic name="Average" stat={sum == 0 ? 0 : (Math.round(((results.good - results.bad) / sum) * 10) / 10)} />
        <Statistic name="Positives" stat={sum == 0 ? 0 : (Math.round(((results.good / sum) * 100) * 10) / 10)} />
      </div> */}
    </div>
    :
    <div>
      <h1>Statistics</h1>
      No stats to show yet
    </div>)
}
const Statistic = (props) => (
  <p> {props.name}: {props.stat}</p>
)
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)


ReactDOM.render(
  <App />,
  document.getElementById("root")
)