import './Thought.scss'
export default function Thought(props){
    return (
        <div className="thought">
            <p>{props.thought.text}</p>
            <button >&times;</button>
        </div>
    )
}