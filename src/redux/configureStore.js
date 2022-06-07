import { configureStore, combineReducers } from 'react';

import reducerBook from './books/books';
import reducerCategories from './categories/categories';

const reducers = combineReducers({
  booksreduc: reducerBook,
  categoriesreduc: reducerCategories,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
