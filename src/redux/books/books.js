import { v4 as uuidv4 } from 'uuid';

// Actions
const ADDNEW = 'bookstore/books/ADDNEW';
const DELETE = 'bookstore/books/REMOVE';
const books = [
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

// Reducer
export default function reducer(state = books, action = {}) {
  switch (action.type) {
    case ADDNEW:
      return [
        ...state,
        action.book,
      ];

    case DELETE:
      return [...state.filter((book) => (book.id !== action.id))];

    default:
      return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADDNEW, book };
}

export function deleteBook(id) {
  return { type: DELETE, id };
}
