import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

const App = () => {
    const [mode, setMode] = useState('light');
    const [inputText, setInputText] = useState('');
    const [notes, setNotes] = useState([
        {text:'sample', id:Math.random()*100, date: '6/13/2022'}
    ]);
    const [filteredNotes, setFilteredNotes] = useState([]);

    

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
        if(savedNotes){
            setNotes(savedNotes)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    }, [notes])

    useEffect(() => {
        setFilteredNotes(notes);
    }, [notes])

    return(
        <div className={`app-container ${mode === 'dark' ? 'bg-color-black' : 'bg-color-white'}`}>
            <div className={`main-container`}>
                <NavBar mode={mode} setMode={setMode}/>
                <SearchBar 
                notes={notes}
                filteredNotes={filteredNotes}
                setFilteredNotes={setFilteredNotes}
                />
                <NotesList 
                inputText={inputText} 
                setInputText={setInputText}
                notes={notes}
                setNotes={setNotes}
                filteredNotes={filteredNotes}
                />
            </div>
        </div>
        
    )
}

export default App;