import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { fetchCharacters } from '../../services/characters';
import { useState, useEffect } from 'react';

export default function Main() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const chars = await fetchCharacters('All');
      setCharacters(chars);
    };
    getCharacters();
  }, []);

  console.log(characters);
  return (
    <div className="App">
      <h1>Lord of the React Router</h1>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
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
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
