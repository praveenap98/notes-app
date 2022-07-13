import React from 'react';
import Notes from './Notes';
import './NotesList.css';

const NotesList = ({ inputText, setInputText, notes, setNotes, filteredNotes }) => {

    const changeHandler = (e) => {
        if((200 - e.target.value.trim().length) >= 0)
        setInputText(e.target.value);
    }

    const clickHandler = () => {
        let date = new Date();
        if(inputText.trim()) {
        setNotes([...notes, {text:inputText, id:Math.random()*100, date: date.toLocaleDateString()}]);
        setInputText('');
        }
    }

    return(
        <div className='notes-container'>
            {
                filteredNotes.map((note) => <Notes 
                key={note.id} 
                text={note.text} 
                date={note.date}
                id={note.id}
                notes={notes}
                setNotes={setNotes}/>
                )
            }
            <div className='note green'>
            <div className='content'>
                <textarea onChange={changeHandler} placeholder='Type to add a notes...' rows='8' cols='35' value={inputText}></textarea>
            </div>
            <div className='footer'>
                <span>{200 - inputText.trim().length} Remaining</span>
                <button className='button' onClick={clickHandler}>Save</button>
            </div>
            </div>
        </div>
    )
}

export default NotesList; 