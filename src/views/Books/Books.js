import React from 'react';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    getData();
  }, []);

  return (
    <div className="view">
      <h1>Books</h1>
      <ul className="list-container">
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
