import { useEffect, useState } from "react";
import { get_movieDetail } from "../../apis/detail.api";
import { useSearchParams } from "react-router-dom";

const DetailPage = () => {
  const [query, setQuery] = useSearchParams();
  const id = query.get("q");
  const [detailMovie, setDetailMovie] = useState([]);
  // useEffect(() => {
  //   get_movieDetail(setDetailMovie, movie_id);
  // }, []);
  useEffect(() => {
    console.log(id);
    get_movieDetail(setDetailMovie, id);
  }, []);

  return <div>DetailPage 입니다</div>;
};

export default DetailPage;
