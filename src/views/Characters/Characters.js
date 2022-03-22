import React from 'react';
import { fetchCharacters } from '../../services/characters';
import { useState, useEffect } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const chars = await fetchCharacters('All');
      setCharacters(chars);
    };
    getCharacters();
  }, []);

  return (
    <div>
      {characters.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  );
}
