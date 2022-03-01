import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise}</p>
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Contents = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].name} exercise={props.parts[0].ex} />
      <Part part = {props.parts[1].name} exercise={props.parts[1].ex} />
      <Part part = {props.parts[2].name} exercise={props.parts[2].ex} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total {props.parts[0].ex+props.parts[1].ex+props.parts[2].ex}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: "Superadvanced web and mobile programming",
    parts: [
      {
        name: "Basics of React",
        ex: 8
      },
      {
        name: "Using props",
        ex: 10
      },
      {
        name: "Component states",
        ex: 12
      }
    ]
  }


  return (
    <div>
      <Header course = {course.name}/>
      <Contents parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )

}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
