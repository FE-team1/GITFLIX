import { useEffect, useState } from "react";
import { get_movieList } from "../../apis/movieList";
import OneMovie from "../../components/oneMovie";
import Header from "../../components/layout/header";
import styled from "styled-components";
import Slider from "react-slick";
import Carousel from "./components/carousel";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const MainPage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    get_movieList(setMovieList);
  }, []);

  useEffect(() => {
    console.log(`movieList:`, movieList);
  }, [movieList]);
  //   const queryClient = useQueryClient();
  //   const { data } = useQuery(["getMovie"], get_movieList);
  //   console.log(data);

  //   const onSetMovie = () => {
  //     queryClient.setQueryData(["getMovie"], res.movie.results);
  //   };
  return (
    <>
      <Header movieList={movieList} setMovieList={setMovieList} />
      <S.Wrapper>
        {/* <Carousel /> */}
        {movieList.map(
          ({
            id,
            title,
            poster_path,
            overview,
            vote_average,
            backdrop_path,
          }) => {
            return (
              <>
                <OneMovie
                  movie_id={id}
                  title={title}
                  poster_path={poster_path}
                  overview={overview}
                  vote_average={vote_average}
                />
                {/* <Slider backdrop_path={backdrop_path} /> */}
              </>
            );
          }
        )}
      </S.Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin: 0 10%;
  padding-top: 100px;
  width: 100%;
  max-width: 1500px;
`;

const S = {
  Wrapper,
};
