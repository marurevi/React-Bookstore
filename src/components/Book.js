import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

export default function Book(props) {
  const {
    id, category, title, author,
  } = props;

  const onClickRemove = (e) => {
    e.preventDefault();
    const dispatch = useDispatch();
    dispatch(deleteBook(e.target.id));
    console.log('Book file: ', 'id de props:', id, '\n', 'id de button:', e.target.id);
  };

  return (
    <div className="container">
      <ul>
        <li>{category}</li>
        <li>{title}</li>
        <li>{author}</li>
        <li className="btn-container">
          <button type="button" disabled>COMENTS</button>
          |
          <button type="button" onClick={onClickRemove} id={id}>REMOVE</button>
          |
          <button type="button" disabled>EDIT</button>
        </li>
      </ul>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
