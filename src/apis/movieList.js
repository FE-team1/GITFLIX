import { axiosInstance } from './core';

export const get_movieList = (setMovie) => {
  axiosInstance.get("/movie/changes").then((res) => {
    let movie_list = res.data.results
    setMovie(movie_list)
  }).catch((err)=> {
    console.log(err)
  })
}