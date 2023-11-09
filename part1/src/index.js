import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  let [selected, setSelected] = useState(0)
  const titleBtn = "Next Anecdote", titleVote = "vote" , most = "Anecdote with most votes" 
  let points = [ 1, 3, 4, 7, 4, 8] 
  let [copy, setCopy] = useState([...points] )
  const getAleatory = () =>{ 
    return Math.floor(Math.random() * props.anecdotes.length);
  }  
  const getPos =()=> { return Math.max(copy) }
  return (
    <div>
      <h2>{props.anecdotes[selected]}</h2>
      <h3>has {copy[selected]} votes</h3>
      <button onClick={()=> setCopy(copy = copy[selected] += 1)}>{titleVote}</button>
      <button onClick={()=> setSelected(selected = getAleatory())}>{titleBtn}</button>
      <h2>{most}</h2>
      <h3>{props.anecdotes[getPos()]}</h3>
      <h3>has {copy[getPos()]} votes</h3>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)