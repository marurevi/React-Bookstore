import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigator() {
  return (
    <nav>
      <span className="Bookstore-CMS">
        Bookstore CMS
      </span>
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
  );
}
