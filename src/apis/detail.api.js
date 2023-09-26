import { axiosInstance } from "./core";

export const get_movieDetail = (setDetailMovie, id) => {
  axiosInstance
    .get(`/movie/${id}`)
    .then((res) => {
      setDetailMovie(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
