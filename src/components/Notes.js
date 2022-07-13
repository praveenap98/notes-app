import React from 'react';
import './Notes.css';



const Notes = ({ text, date, id, notes, setNotes }) => {

    const clickHandler = () => {
        setNotes(() => notes.filter((note) => note.id !== id))
    }

    return(
        <div className='note'>
            <div className='content'>
                <span>{text}</span>
            </div>
            <div className='footer'>
                <span>{date}</span>
                <button className='button' onClick={clickHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Notes;