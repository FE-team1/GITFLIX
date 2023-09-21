import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/collection/collection_id/images',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDE4NmQ4YjQ0NDQzNGUwYmNiYTJjMDI4YjllODY2NyIsInN1YiI6IjY1MGFmNjBkMTJjNjA0MDBlMWYxMGY5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bRMQHe4nDxGvCdzmTMR2SQBGWVb9wxs0NbvevNYPjOU'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });