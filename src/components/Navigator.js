import React from 'react';
import { Link } from 'react-router-dom';
import image from '../logo.svg';

export default function Navigator() {
  return (
    <nav>
      <img src={image} alt="" />
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
  );
}
