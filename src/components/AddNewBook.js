import React from 'react';
import PropTypes from 'prop-types';

export default function AddNewBook({ handleSubmit }) {
  return (
    <div className="newTask-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="addNew" placeholder="Book Title" />
        <select name="category">
          <option value="" defaultValue>Category</option>
          <option value="Adventure">Adventure</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Terror">Terror</option>
          <option value="Romance">Romance</option>
          <option value="Economy">Economy</option>
          <option value="Technology">Technology</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

AddNewBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
