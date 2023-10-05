import { axiosInstance } from "./core";

export const get_similarMovie = (setSimilarMovie, id) => {
  axiosInstance
    .get(`/movie/${id}/similar`)
    .then((res) => {
      let similarMovie = res.data.results;
      setSimilarMovie(similarMovie);
      console.log(similarMovie);
    })
    .catch((err) => {
      console.log(err);
    });
};
