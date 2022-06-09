/* eslint-disable camelcase */
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const ID = 'KYzsKkgvhqr8KHkbtPuZ';
const urlAPI = `${url + ID}/books/`;

const getApiData = async () => {
  const response = await fetch(urlAPI, {
    method: 'GET',
  }).catch((error) => error.message);

  const res = await response.json();
  const data = Object.keys(res).map((id) => {
    const book = res[id][0];
    book.id = id;
    return book;
  });
  return data;
};

const addApiData = async (book) => {
  await fetch(urlAPI, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  }).catch((error) => error.message);
};

const deleteApiData = async (id) => {
  await fetch(urlAPI + id, {
    method: 'DELETE',
  }).catch((error) => error.message);
};

export { getApiData, addApiData, deleteApiData };
