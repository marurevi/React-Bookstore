// Actions
const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';
const categories = [];

// Reducer
export default function reducer(state = categories, action = {}) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: CHECKSTATUS };
}
