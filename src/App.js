import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';
import { getAllBooks } from './redux/books/books';
import store from './redux/configureStore';
import { getApiData } from './redux/helpers/APIdata.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getApiData().then((res) => (
      store.dispatch(getAllBooks(res))
    ));
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
