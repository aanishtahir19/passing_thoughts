import './App.scss';
import { useState } from 'react';
import AddThought from '../AddThoughts/AddThought';
import Thought from '../Thought/Thought';
// import { getExpiryTime, getNewId } from '../../utilities/util';
export default function App() {
  let [thoughts, setThoughts] = useState([])
  const addThought = (thought)=>{
    setThoughts((prev)=>[thought, ...prev])
    // console.log(thought)
  }
  const removeThought = (id)=>{
    setThoughts(thoughts.filter(thought=> thought.id !== id))
  }
  return (
    <div className="App">
      <header>

      <h1>Passing Thoughts</h1>
      </header>
      <main>

      <AddThought addNewThought={addThought}/>
      {
        thoughts.map(thought => (
          <Thought thought={thought} key={thought.id} removeThought={removeThought} />
        )

        )
      }
      </main>
    </div>
  );
}


