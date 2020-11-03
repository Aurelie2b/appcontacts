import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-primary mb-3 py-0'>
                <div className='container'>
                    <a href="/" className="navbar-brand">Learn React</a>
                
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-2">
                            <a href="/" className="nav-link">Accueil</a>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/AddContact" className="nav-link">Ajouter contact</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/Liste" className="nav-link">Contacts</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/TodoList" className="nav-link">To-do list</Link>
                        </li>
                    </ul>  
                </div>
            </nav>
        </div>
    )
}
