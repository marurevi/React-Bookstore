import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

export default function Navigator() {
  return (
    <nav>
      <div>
        <span className="Bookstore-CMS">
          Bookstore CMS
        </span>
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </div>
      <div>
        <BsPersonCircle style={{ width: '30px', height: '30px', color: '#4386bf' }} />
      </div>
    </nav>
  );
}
