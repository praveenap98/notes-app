import React from 'react';
import './NavBar.css';

const NavBar = ({mode, setMode}) => {

    const clickHandler = () => {
        setMode(() => mode === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='navbar'>
            <h1 className={`${mode === 'dark' ? 'color-white' : 'color-black'}`}>Notes</h1>
            <button className='button' onClick={clickHandler}>Toggle Mode</button>
        </div>
    )
}

export default NavBar;