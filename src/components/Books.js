import React from 'react';
import Navigator from './Navigator';
import Book from './Book';
import AddNewBook from './AddNewBook';

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
  ];

  const handleSubmit = () => { console.log('click'); };

  return (
    <div>
      <Navigator />
      {booksArray.map((book) => (
        <div key={book.id} className="book-section">
          <Book topic={book.topic} title={book.title} author={book.author} />
        </div>
      ))}
      <AddNewBook onSubmit={handleSubmit} />
    </div>
  );
}
