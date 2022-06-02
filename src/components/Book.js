import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { topic, title, author } = props;
  return (
    <div className="container">
      <ul>
        <li>{topic}</li>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  );
}

Book.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
