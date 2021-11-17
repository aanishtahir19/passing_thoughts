import { useEffect } from 'react'
import './Thought.scss'
export default function Thought(props){
    const { thought, removeThought } = props;
    const handleDelete = (e)=>{
        removeThought(thought.id)
    }
    useEffect(()=>{
        const timeRemaining =  thought.expiryTime-Date.now();
        const rm = setTimeout(()=>{
            removeThought(thought.id);

        }, timeRemaining)
        return ()=>{
            clearTimeout(rm);
        }
    })
    return (
        <div className="thought">
            <p>{thought.text}</p>
            <button onClick={handleDelete}>&times;</button>
        </div>
    )
}