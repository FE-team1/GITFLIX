import { useEffect, useState } from "react";
import { get_movieDetail } from "../../apis/detail.api";
import { useSearchParams } from "react-router-dom";

const DetailPage = () => {
  const [query, setQuery] = useSearchParams();
  const id = query.get("q");
  const [detailMovie, setDetailMovie] = useState([]);
  useEffect(() => {
    console.log(id);
    get_movieDetail(setDetailMovie, id);
  }, []);

  useEffect(() => {
    console.log(detailMovie);
  }, [detailMovie]);

  return (
    <div>
      <h1>{detailMovie.title}</h1>
    </div>
  );
};

export default DetailPage;
