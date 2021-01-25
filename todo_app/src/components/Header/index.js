import {useState} from 'react';
import moonIcon from '../../images/icon-moon.svg';
import sunIcon from '../../images/icon-sun.svg';
import './style.css';

export default function Header() {
    const [icon,setIcon] = useState(true);
    function toggleIcon() {
        setIcon(!icon)
    }
    return (
        <header className="App-header">
            <section className="container header-bar">
                <h1>Todo</h1>
                <button className="btn btn-toggle" onClick={toggleIcon}>
                    <img src={icon ? moonIcon : sunIcon} alt=""/>
                </button>
            </section>
        </header>
    )
}