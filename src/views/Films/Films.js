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
    <div className="view">
      <h1>Films</h1>
      <ul className="list-container">
        {films.map((f) => (
          <li key={f.id}>{f.title}</li>
        ))}
      </ul>
    </div>
  );
}
