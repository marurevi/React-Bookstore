// Actions
const ADDNEW = 'bookstore/books/ADDNEW';
const DELETE = 'bookstore/books/REMOVE';
const books = [
  {
    id: 1,
    topic: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    topic: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    topic: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

// Reducer
export default function reducer(state = books, action = {}) {
  switch (action.type) {
    case ADDNEW:
      return [
        ...books,
        action.book,
      ];

    case DELETE:
      return [
        books.map((book) => book.id !== action.id),
      ];

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
