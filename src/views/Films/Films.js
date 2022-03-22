import { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      {films.map((f) => (
        <p key={f.id}>{f.title}</p>
      ))}
    </div>
  );
}
