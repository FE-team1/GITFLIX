import { useEffect, useState } from "react";
import { get_movieDetail } from "../../apis/detail.api";
import { useSearchParams } from "react-router-dom";
import { get_image } from "../../apis/image.api";

const DetailPage = () => {
  const [query, setQuery] = useSearchParams();
  const id = query.get("q");
  const [detailMovie, setDetailMovie] = useState([]);
  const [image, setImage] = useState({});
  const imgUrl = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    console.log(id);
    get_movieDetail(setDetailMovie, id);
  }, []);

  useEffect(() => {
    get_image(setImage, id);
  }, []);

  return (
    <div>
      <h1>{detailMovie.title}</h1>
      <img src={`${imgUrl}${detailMovie.poster_path}`} />
      <div>{detailMovie.overview}</div>
    </div>
  );
};

export default DetailPage;
