import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { CardMedia } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Carousel = ({ movieList }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  return (
    <SwiperWrapper>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="Swiper"
      >
        {movieList.map((movieList, index) => {
          const { id, poster_path, backdrop_path, title, overview, release_date } = movieList;
          const back_url = imgUrl + backdrop_path;
          const post_url = imgUrl + poster_path;
          return (
            <SwiperSlide key={index}>
              <BackGround img_src={back_url} />
              <InnerBox>
                <CardMedia
                  onClick={() => {
                    navigate(`/detail?q=${id}`);
                  }}
                  component="img"
                  image={post_url}
                  sx={{
                    cursor: "pointer",
                  }}
                />
                <TextMedia>
                  <IntroduceText>
                    <div>
                      <TitleText>{title}</TitleText>
                      <OverViewText>{overview}</OverViewText>
                    </div>
                    <MakeDateText>create at {release_date}</MakeDateText>
                  </IntroduceText>
                </TextMedia>
              </InnerBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
};

export default Carousel;

const SwiperWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const TextMedia = styled.div`
  margin-left: 30px;
`;

const IntroduceText = styled.div`
  display: flex;
  color: white;
  text-align: start;
  flex-direction: column;
  height: 100%;
  line-height: 32px;
  justify-content: space-between;
  div {
    margin: 5px 0 5px 0;
  }
`;

const TitleText = styled.div`
  padding-top: 190px;
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`;

const OverViewText = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const MakeDateText = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

const InnerBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 100px;
  display: flex;

  img {
    transition: 1s;
    width: auto !important;
  }

  :hover {
    img {
      transform: scale(1.02);
    }
    cursor: pointer;
  }
`;

const BackGround = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  background-image: url(${({ img_src }) => img_src});
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%);
  }
`;
