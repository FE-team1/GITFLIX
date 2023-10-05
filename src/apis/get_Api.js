import { axiosInstance } from "./core";

export const get_nowPlayingMovie = (setNowPlayingMovie) => {
  axiosInstance
    .get("/movie/now_playing")
    .then((res) => {
      let nowPlayingMovie = res.data.results;
      setNowPlayingMovie(nowPlayingMovie);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_movieDetail = (setDetailMovie, id) => {
    axiosInstance
        .get(`/movie/${id}`)
        .then((res) => {
            let movieData = res.data;
            setDetailMovie(movieData);
            console.log(movieData);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const get_image = (setImage, movie_id) => {
    axiosInstance
        .get(`movie/${movie_id}/images`)
        .then((res) => {  
            setImage(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const get_movieList = (setMovieList) => {
    axiosInstance
      .get("/discover/movie")
      .then((res) => {
        let movie_list = res.data.results;
        setMovieList(movie_list);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const get_popularMovie = (setPopularMovie) => {
    axiosInstance
      .get("/movie/popular")
      .then((res) => {
        let popularMovie = res.data.results;
        setPopularMovie(popularMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const get_topRatedMovie = (setTopRatedMovie) => {
    axiosInstance
      .get("/movie/top_rated")
      .then((res) => {
        let topRatedMovie = res.data.results;
        setTopRatedMovie(topRatedMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const get_upComingMovie = (setUpComingMovie) => {
    axiosInstance
        .get('/movie/upcoming')
        .then((res) => {
            let upComingMovie = res.data.results;
            setUpComingMovie(upComingMovie);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const get_video = (setVideo, movie_id) => {
  axiosInstance
    .get(`movie/${movie_id}/videos`)
    .then((res) => {
      setVideo(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

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



