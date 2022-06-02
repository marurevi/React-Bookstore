import { render } from '@testing-library/react';
import React from 'react';
import Navigator from './Navigator';

export default function Books() {
  const booksArray = [
    {
      id: 1,
      topic: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      topic: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      topic: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ]

  render() {
    return (
      <div>
        <Navigator />
        <h1>Books</h1>
        {booksArray.map((book) => (
          <li key={book.id}>
            <span>{book.topic}</span>
            <span>{book.title}</span>
            <span>{book.author}</span>
          </li>
        ))}
      </div>
    );
  }
}
