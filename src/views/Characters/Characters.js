import React from 'react';
import { fetchCharacters } from '../../services/characters';
import { useState, useEffect } from 'react';
import RaceSelect from '../../components/RaceSelect/RaceSelect';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const chars = await fetchCharacters('All');
      setCharacters(chars);
    };
    getCharacters();
  }, []);

  const [race, setRace] = useState('All');

  const onChange = (e) => {
    setRace(e.target.value);
  };

  return (
    <div className="view">
      <h1>Characters</h1>
      <RaceSelect {...{ onChange }} />
      <ul className="list-container">
        {characters
          .filter((char) => race === 'All' || char.race === race)
          .map((char) => (
            <li key={char.id}>{char.name}</li>
          ))}
      </ul>
    </div>
  );
}
