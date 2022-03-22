import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/films">Films</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </nav>
  );
}
