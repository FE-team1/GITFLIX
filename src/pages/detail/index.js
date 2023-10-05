import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
// import YouTube from "react-youtube";
import { Container, Typography } from "@mui/material";
import { Container, Typography } from "@mui/material";
import Header from "../../components/layout/header";
import Youtube from "react-youtube";
import { get_similarMovie } from "../../apis/similar.api";
import OneMovie from "../../components/oneMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const DetailPage = () => {
  const [query, setQuery] = useSearchParams();

  const id = query.get("q");
  const [detailMovie, setDetailMovie] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    console.log(id);
    get_movieDetail(setDetailMovie, id);
    get_similarMovie(setSimilarMovie, id);
    get_image(setImage, id);
    get_video(setVideo, id);
    console.log(detailMovie);
    console.log(similarMovie);
  }, [id]);
  const videos = video.results;
  console.log(videos);

  const goToScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <S.Wrapper>
        <Container maxWidth="xl">
          <BackGround backdrop_path_src={detailMovie.backdrop_path}></BackGround>
          <Youtube
            videoId={videos && videos[0].key}
            opts={{
              width: "80%",
              height: "640px",
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                loop: 1,
                controls: 1,
              },
            }}
          />
          <br />
          <S.TitleRating>
            <Typography variant="h2" gutterBottom>
              {detailMovie.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              ⭐️ {Math.floor(detailMovie.vote_average)}
            </Typography>
          </S.TitleRating>
          <Typography variant="h6" gutterBottom color={"gray"}>
            Release {detailMovie.release_date}
          </Typography>
          <br />
          <Typography variant="h5" gutterBottom>
            {detailMovie.tagline}
          </Typography>
          <S.SectionInfo>
            <Typography variant="h3" gutterBottom>
              Overview
            </Typography>
            <S.OverViewBox>
              <Typography variant="h7" sx={{ lineHeight: 2 }}>
                {detailMovie.overview}
              </Typography>
            </S.OverViewBox>
          </S.SectionInfo>
        </Container>
        <br />
        <br />
        <br />
        <Typography variant="h4" gutterBottom color={"gray"}>
          Similar Movie
        </Typography>
      </S.Wrapper>
      <S.SimilarWrapper>
        {similarMovie.map(({ id, title, poster_path, overview, vote_average }) => {
          return (
            <>
              <OneMovie movie_id={id} title={title} poster_path={poster_path} overview={overview} vote_average={vote_average} />
            </>
          );
        })}
      </S.SimilarWrapper>
      <FontAwesomeIcon icon={faAngleUp} bounce size="3x" transform="right-470 up-40" onClick={goToScrollTop} cursor="pointer" />
    </>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin: 0 10%;
  padding-top: 100px;
  width: 100%;
  max-width: 1500px;
`;

const SimilarWrapper = styled.div`
  margin: 0 5%;

  width: 100%;
  max-width: 1500px;
`;

const TitleRating = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const SectionInfo = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Img = styled.div`
  width: 100%;
  max-width: 1500px;
`;

const BackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ backdrop_path }) => backdrop_path});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

const OverViewBox = styled.div`
  width: 80%;
`;

const S = {
  Wrapper,
  SectionInfo,
  TitleRating,
  OverViewBox,
  Img,
  SimilarWrapper,
};
