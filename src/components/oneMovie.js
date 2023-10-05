import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { get_image } from '../apis/get_Api';

const OneMovie = ({ movie_id, title, poster_path, overview, vote_average }) => {
    // const [posters, setPosters] = useState([]);
    const [image, setImage] = useState({});
    const imgUrl = 'https://image.tmdb.org/t/p/original';
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        get_image(setImage, movie_id);
        setIsLoading(true);
    }, []);

    const goToMovieDetail = () => {
        console.log(movie_id);
        navigate(`/detail/?q=${movie_id}`);
    };

    return (
        <S.MovieContainer onClick={goToMovieDetail}>
            {isLoading && poster_path ? (
                <>
                    <S.Poster src={`${imgUrl}${poster_path}`} />
                    {/* hover시의 효과를 주기위해서 */}
                    <S.InnerText className="hoverComponent">
                        <S.Title>{title}</S.Title>
                        <S.OverView>{overview}</S.OverView>
                        <S.Rating>⭐️ {vote_average}</S.Rating>
                    </S.InnerText>
                </>
            ) : (
                <Skeleton startColor="#373737" endColor="#20242B" isLoading={isLoading} width="100%" height="100%">
                    <>
                        <S.Poster src={`${imgUrl}${poster_path}`} />
                        {/* hover시의 효과를 주기위해서 */}
                        <S.InnerText className="hoverComponent">
                            <S.Title>{title}</S.Title>
                            <S.OverView>{overview}</S.OverView>
                            <S.Rating>⭐️ {vote_average}</S.Rating>
                        </S.InnerText>
                    </>
                </Skeleton>
            )}
        </S.MovieContainer>
    );
};

export default OneMovie;

const MovieContainer = styled.div`
    position: relative;
    display: inline-block;
    margin: 80px 70px;
    cursor: pointer;
    img {
        transition: all 0.3s linear;
    }
    &:hover {
        .hoverComponent {
            opacity: 1;
        }
        img {
            transform: scale(1.15);
        }
    }
`;

const Poster = styled.img`
    border-radius: 4px;
    width: 200px;
`;

const InnerText = styled.div`
    position: absolute;
    top: 49.5%;
    left: 50%;
    opacity: 0;
    z-index: 7;
    width: 115%;
    height: 114%;
    padding: 20px;
    border-radius: 5px;
    transition: opacity 0.3s linear;
    background-color: rgba(36, 36, 36, 0.3);
    text-align: left;
    transform: translate(-50%, -50%);
`;

const Title = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    width: 300px;
    padding-bottom: 2%;
`;

const OverView = styled.div`
    border-top: 1px solid white;
    padding-top: 30px;
    line-height: 1.2;
    height: 7.5;
    width: 12em;
    // 여러줄 말줄임
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
`;

const Rating = styled.div`
    padding-top: 50px;
`;

const S = {
    Poster,
    Title,
    MovieContainer,
    OverView,
    InnerText,
    Rating,
};
