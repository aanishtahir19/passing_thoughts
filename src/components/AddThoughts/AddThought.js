import './AddThought.scss'
import { useState } from 'react';
import { getExpiryTime, getNewId } from '../../utilities/util';
export default function AddThought(props) {
    let [text, setText] = useState("");
    const handleChange = ({target})=>{
        // console.log({text})
        setText(target.value);
      }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const thought = {
            id: getNewId(),
            text:text,
            expiryTime: getExpiryTime()
        }
        if(thought.text.length > 0 && thought.text.replace(/^\s+|\s+$/gm,'').length !== 0){
            props.addNewThought(thought);
            // console.log(thought)
            setText("")
        }
        
    }
    return ( 
        <form className="addThought" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
     );
}
