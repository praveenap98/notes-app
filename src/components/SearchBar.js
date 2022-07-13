import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ notes, filteredNotes, setFilteredNotes }) => {

    const [searchText, setSearchText] = useState('');

    const changeHandler = (e) => {
        // console.log(e.target.value);
        setSearchText(e.target.value);
        console.log(searchText)
        if(e.target.value === ''){
            setFilteredNotes(notes);
        }
        else{
            setFilteredNotes(notes.filter((note) => note.text.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }

    return(
        <div className='searchbar'>
            <input onChange={changeHandler} type='text' placeholder='Type to search...' />
        </div>
    )
}

export default SearchBar;