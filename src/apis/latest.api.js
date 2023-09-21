import axios from 'axios';

const latest = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/latest',
  headers: {accept: 'application/json'}
};

axios
  .request(latest)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });