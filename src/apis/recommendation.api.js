import axios from 'axios';

const recommendations = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/recommendations',
  params: {language: 'en-US', page: '1'},
  headers: {accept: 'application/json'}
};

axios
  .request(recommendations)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });