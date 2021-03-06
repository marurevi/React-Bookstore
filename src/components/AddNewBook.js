import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const clearInput = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      category,
      title,
      author,
    }));

    clearInput();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="newTask-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="addNew" placeholder="Book Title" onChange={handleTitleChange} required />
        <input type="text" name="author" placeholder="Author" onChange={handleAuthorChange} required />
        <select name="categoryr" onChange={handleCategoryChange}>
          <option value="" defaultValue>Category</option>
          <option value="Economy">Economy</option>
          <option value="Technology">Technology</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="History">History</option>
          <option value="Literature">Literature</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Terror">Terror</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
