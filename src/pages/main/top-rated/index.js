import { useEffect, useState } from "react";
import styled from "styled-components";
import OneMovie from "../../../components/oneMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { get_topRatedMovie } from "../../../apis/get_Api";
import { flexCenter, subtitle } from "../../../styles/common.style";
import { InView, useInView } from "react-intersection-observer";
import { axiosInstance } from "../../../apis/core";

const TopRated = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  useEffect(() => {
    get_topRatedMovie(setTopRatedMovie);
  }, []);

  useEffect(() => {
  }, [topRatedMovie]);

  const toprateFetch = () => {
    axiosInstance
      .get(`movie/top_rated?page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        // 리스트 뒤로 붙여주기
        setTopRatedMovie([...topRatedMovie, ...res.data.results]);
        // 요청 성공 시에 페이지에 1 카운트 해주기
        setPage((page) => page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // inView가 true 일때만 실행한다.
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      toprateFetch();
    }
  }, [inView]);

  const goToScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.Wrapper>
      <S.Title>Top-Rated Movies</S.Title>
      {topRatedMovie.map(
        ({ id, title, poster_path, overview, vote_average }) => {
          return (
            <>
              <OneMovie
                movie_id={id}
                title={title}
                poster_path={poster_path}
                overview={overview}
                vote_average={vote_average}
              />
            </>
          );
        }
      )}
      <FontAwesomeIcon
        icon={faAngleUp}
        bounce
        size="3x"
        onClick={goToScrollTop}
        cursor="pointer"
      />
      <div ref={ref}>안녕</div>
    </S.Wrapper>
  );
};

export default TopRated;

const Wrapper = styled.div`
  text-align: center;
    margin: 0 auto;
  max-width: 1460px;
  padding-top: 100px;
  width: 100%;
`;

const Title = styled.p`
  margin-top: 2%;
  ${flexCenter};
  ${subtitle}
`;

const S = {
  Wrapper,
  Title,
};
