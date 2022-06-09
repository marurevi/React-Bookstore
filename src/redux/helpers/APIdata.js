const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const ID = 'KYzsKkgvhqr8KHkbtPuZ';
const urlAPI = `${url + ID}/books`;

const getApiData = async () => {
  const response = await fetch(urlAPI, {
    method: 'GET',
  });
  const res = await response.json();
  const data = []; 
  if (res) {
    res.map((key, value) => {
    const id = `${key}`;
    const category = `${value[0].category}`;
    const title = `${value[0].title}`;
    const author = `${value[0].author}`;
    data.push({
      id, category, title, author,
    });
  });
  }
  return data;
};

// getApiData();

const addApiData = async (book) => {
  const response = await fetch(urlAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  const res = response.json();
  return res;
};

const deleteApiData = async (id) => {
  const response = await fetch(urlAPI + ID, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const res = response.json();
  return res;
};

export { getApiData, addApiData, deleteApiData };
