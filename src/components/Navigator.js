import React from 'react';
import { Link } from 'react-router-dom';
import image from '../logo.svg';

export default function Navigator() {
  return (
    <nav>
      <img src={image} alt="" />
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
}
