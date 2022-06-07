import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { category, title, author } = props;
  return (
    <div className="container">
      <ul>
        <li>{category}</li>
        <li>{title}</li>
        <li>{author}</li>
        <li className="btn-container">
          <button type="button" disabled>COMENTS</button>
          |
          <button type="button" disabled>REMOVE</button>
          |
          <button type="button" disabled>EDIT</button>
        </li>
      </ul>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
