import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
