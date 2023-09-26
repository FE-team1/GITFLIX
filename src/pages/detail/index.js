import { useEffect, useState } from "react";
import { get_movieDetail } from "../../apis/detail.api";
import { useSearchParams } from "react-router-dom";
import { get_image } from "../../apis/image.api";
import Header from "../../components/layout/header";
import styled from "styled-components";
import { get_video } from "../../apis/video.api";
import { AiOutlineConsoleSql } from "react-icons/ai";

const DetailPage = () => {
  const [query, setQuery] = useSearchParams();
  const id = query.get("q");
  const [detailMovie, setDetailMovie] = useState([]);
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});
  const imgUrl = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    console.log(id);
    get_movieDetail(setDetailMovie, id);
    get_image(setImage, id);
    get_video(setVideo, id);
  }, []);
  const videos = video.results;
  console.log(videos);
  // const trailer = v
  const trailer = videos && videos.filter((item) => item.name.includes("Teaser"));
  console.log(trailer);
  const key = trailer && trailer.map((tra) => tra.key);
  console.log(key);
  const TrailerKey = key && key.join();
  console.log(TrailerKey);

  return (
    <div>
      <Header />
      <Wrapper>
        <h1>{detailMovie.title}</h1>
        <img src={`${imgUrl}${detailMovie.poster_path}`} />
        {/* <div>{detailMovie.overview}</div> */}
      </Wrapper>
    </div>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin: 0 10%;
  padding-top: 100px;
  width: 100%;
  max-width: 1500px;
`;
