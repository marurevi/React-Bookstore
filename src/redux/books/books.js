// Actions
const ADDNEW = 'bookstore/books/ADDNEW';
const DELETE = 'bookstore/books/REMOVE';
const books = [];

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
