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
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
}
