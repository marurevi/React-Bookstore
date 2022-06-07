import { legacy_createStore as createStore, combineReducers } from 'redux';

import reducerBook from './books/books';
import reducerCategories from './categories/categories';

const reducers = combineReducers({
  reducerB: reducerBook,
  reducerC: reducerCategories,
});

const store = createStore(reducers);

export default store;
