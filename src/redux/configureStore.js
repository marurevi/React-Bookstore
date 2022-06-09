import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerBook from './books/books';
import reducerCategories from './categories/categories';

const reducers = combineReducers({
  reducerB: reducerBook,
  reducerC: reducerCategories,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
