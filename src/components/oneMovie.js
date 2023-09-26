import { useEffect, useState } from "react";
import { get_image } from "../apis/image.api";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { get_movieDetail } from "../apis/detail.api";

const OneMovie = ({ movie_id, title, poster_path, overview, vote_average, movieList, setMovieList }) => {
  // const [posters, setPosters] = useState([]);
  const [image, setImage] = useState({});
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  // content, 평점 랜더링 여부를 state로 정의
  const [isShowContent, setIsShowContent] = useState(false);
  const [query, setQuery] = useSearchParams();
  let id = query.get("q");

  const navigate = useNavigate();

  useEffect(() => {
    get_image(setImage, movie_id);
    console.log(movie_id);
  }, []);

  const showContent = () => {
    setIsShowContent(true);
  };

  const hideContent = () => {
    setIsShowContent(false);
  };

  const goToMovieDetail = () => {
    console.log(movie_id);
    navigate(`/detail/?q=${movie_id}`);
    // get_movieDetail(setDetailMovie, movie_id);
  };

  return (
    <S.MovieContainer onMouseOver={showContent} onMouseLeave={hideContent} onClick={goToMovieDetail}>
      {poster_path ? (
        <>
          <S.Img src={`${imgUrl}${poster_path}`} />
          {isShowContent ? (
            <S.Text>
              <S.Title>{title}</S.Title>
              <S.OverView>{overview}</S.OverView>
              <div>평점: ⭐️{vote_average}</div>
            </S.Text>
          ) : (
            ""
          )}
        </>
      ) : (
        <S.Img src="img/noimage.png"></S.Img>
      )}
    </S.MovieContainer>
  );
};

export default OneMovie;

const MovieContainer = styled.span`
  position: relative;
  display: inline-block;
  margin: 30px 70px;
  cursor: pointer;
`;

const Img = styled.img`
  border-radius: 4px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`;

const Text = styled.div`
  background-color: transparent;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OverView = styled.div`
  line-height: 1.2;
  height: 3.6em;
  width: 12em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  width: 300px;
  align-items: center;
`;

const S = {
  Img,
  Title,
  MovieContainer,
  OverView,
  Text,
};
