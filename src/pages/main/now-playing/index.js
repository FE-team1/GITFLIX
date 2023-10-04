import { useEffect, useState } from "react";
import { get_popularMovie } from "../../../apis/popular.api";
import styled from "styled-components";
import OneMovie from "../../../components/oneMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const NowPlaying = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

  useEffect(() => {
    get_popularMovie(setNowPlayingMovie);
  }, []);

  useEffect(() => {
    console.log(`popularMovie:`, nowPlayingMovie);
  }, [nowPlayingMovie]);

  const goToScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.Wrapper>
      <S.Title>Now-Playing Movies</S.Title>
      {nowPlayingMovie.map(({ id, title, poster_path, overview, vote_average }) => {
        return (
          <>
            <OneMovie movie_id={id} title={title} poster_path={poster_path} overview={overview} vote_average={vote_average} />
          </>
        );
      })}
      <FontAwesomeIcon icon={faAngleUp} bounce size="3x" onClick={goToScrollTop} cursor="pointer" />
    </S.Wrapper>
  );
};

export default NowPlaying;

const Wrapper = styled.div`
  margin: 0 5%;
  max-width: 1460px;
  padding-top: 100px;
  width: 100%;
`;

const Title = styled.p`
  margin: 1% 5%;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const S = {
  Wrapper,
  Title,
};
