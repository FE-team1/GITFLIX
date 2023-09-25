import { useEffect, useState } from 'react';
import { get_image } from '../apis/image.api';
import styled from 'styled-components';

const OneMovie = ({ movie_id, title, poster_path, overview, vote_average }) => {
    // const [posters, setPosters] = useState([]);
    const [image, setImage] = useState({});
    const imgUrl = 'https://image.tmdb.org/t/p/w200';

    useEffect(() => {
        get_image(setImage, movie_id);
    }, []);

    useEffect(() => {
        console.log(Array(image));
    }, [image]);

    return (
        <S.MovieContainer>
            {poster_path ? (
                <>
                    <S.Img src={`${imgUrl}${poster_path}`} />
                    <S.OverView>
                        <div>{overview}</div>
                        <div>평점: ⭐️{vote_average}</div>
                    </S.OverView>
                </>
            ) : (
                <S.Img src="img/noimage.png"></S.Img>
            )}
            <S.Title>{title}</S.Title>
        </S.MovieContainer>
    );
};

export default OneMovie;

const MovieContainer = styled.span`
    position: relative;
    display: inline-block;
    margin: 30px;
`;

const Img = styled.img`
    border-radius: 4px;
    transition: all 0.2s linear;
    &:hover {
        transform: scale(1.2);
    }
`;

const OverView = styled.div`
    background-color: transparent;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
`;

const Title = styled.span`
    position: relative;
    display: flex;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    width: 300px;
    /* white-space: nowrap; */
    align-items: center;
`;

const S = {
    Img,
    Title,
    MovieContainer,
    OverView,
};
