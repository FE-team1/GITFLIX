import { axiosInstance } from "./core";

// 무한 스크롤
// 지정한 타겟 div가 화면에 보일 때 마다 서버에 요청을 보냄
export const movieFetch = (setMovies, setPage) => {
  axiosInstance
    .get("/discover/movie")
    .then((res) => {
      let movies = res.data.results;
      // 리스트 뒤로 붙여주기
      setMovies([...movies, ...res.data]);
      // 요청 성공 시에 페이지에 1 카운트 해주기
      setPage((page) => page + 1);
    })
    .catch((err) => {
      console.log(err);
    });
};

//   import { axiosInstance } from "./core";

//   export const get_movieList = (setMovieList) => {
//     axiosInstance
//       .get("/discover/movie")
//       .then((res) => {
//         let movie_list = res.data.results;
//         setMovieList(movie_list);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
