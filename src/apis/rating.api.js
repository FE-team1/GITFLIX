import axios from 'axios';

const rating = {
  method: 'POST',
  url: 'https://api.themoviedb.org/3/movie/movie_id/rating',
  headers: {accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8'}
};

axios
  .request(rating)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });