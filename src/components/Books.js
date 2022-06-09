import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Navigator from './Navigator';
import Book from './Book';
import AddNewBook from './AddNewBook';

export default function Books() {
  const booksArray = useSelector((state) => state.reducerB);

  return (
    <div>
      <Navigator />
      {booksArray.map((book) => (
        <div key={uuidv4()} className="book-section">
          <Book category={book.category} title={book.title} author={book.author} id={book.id} />
        </div>
      ))}
      <AddNewBook />
    </div>
  );
}
