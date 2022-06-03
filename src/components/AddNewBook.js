import React from 'react';
import PropTypes from 'prop-types';

export default function AddNewBook({ handleSubmit }) {
  return (
    <div className="newTask-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="addNew" placeholder="Book Title" />
        <select name="author">
          <option value="" defaultValue>Author</option>
          <option value="Susan Collins">Susan Collin</option>
          <option value="Dan Brown">Dan Brown</option>
          <option value="Wilbour Smith">Wilbour Smith</option>
          <option value="Artur Harley">Artur Harley</option>
          <option value="Isaac Asimov">Isaac Asimov</option>
          <option value="Sidney Sheldon">Sidney Sheldon</option>
          <option value="Frank Herbert">Frank Herbert</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

AddNewBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
