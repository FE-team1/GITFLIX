import axios from 'axios';

const detail = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id',
  params: {language: 'en-US'},
  headers: {accept: 'application/json'}
};

axios
  .request(detail)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });