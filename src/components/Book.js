import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { deleteBook } from '../redux/books/books';

export default function Book({
  id, category, title, author,
}) {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        <li className="text-category">{category}</li>
        <li className="text-title">{title}</li>
        <li className="text-author">{author}</li>
        <li className="btn-container">
          <button type="button" disabled>COMENTS</button>
          |
          <button type="button" onClick={() => dispatch(deleteBook(id))} id={id}>REMOVE</button>
          |
          <button type="button" disabled>EDIT</button>
        </li>
      </ul>
      <div className="circle-container">
        <CircularProgressBar
          animationSmooth="1s ease-out"
          colorCircle="#f1f1f1"
          colorSlice="#FF6D00"
          percent={Math.floor(Math.random() * 100) + 15}
          linearGradient={['#379cf6', '#307bbe']}
          size={200}
        />
      </div>
      <div className="update-container">
        <h3>
          CHAPTER:
          <span>{Math.floor(Math.random() * 60) + 3}</span>
        </h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
