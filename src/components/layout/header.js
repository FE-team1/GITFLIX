import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { flexAlignCenter } from '../../styles/common.style';
import { useState } from 'react';

const Header = () => {
    const [searchBox, setSearchBox] = useState(false);
    const onClickSearch = (prev) => {
        setSearchBox((prev) => !prev);
    };
    return (
        <S.Wrapper>
            <S.Container>
                <S.Logo src="img/githubicon.png"></S.Logo>
                <nav>
                    <S.Ul>
                        <li>Now Playing</li>
                        <li>Popular</li>
                        <li>Top Rated</li>
                        <li>Upcoming</li>
                    </S.Ul>
                </nav>
                {searchBox ? (
                    <S.SearchBox>
                        <S.Input />
                        <AiOutlineSearch onClick={onClickSearch} size={30} />
                    </S.SearchBox>
                ) : (
                        <AiOutlineSearch onClick={onClickSearch} size={30} />
                )}
            </S.Container>
        </S.Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    position: fixed;
    z-index: 2;
    background-color: black;
`;

const Container = styled.div`
    ${flexAlignCenter}
    font-size: 1.2rem;
    margin: 20px 80px;
`;

const Logo = styled.img`
    width: 50px;
    margin-right: 50px;
`;

const Ul = styled.div`
    display: flex;
    padding-right: 600px;
    li {
        padding: 10px;
        font-weight: 500;
        cursor: pointer;
        ${flexAlignCenter}
        &:hover {
            color: ${({ theme }) => theme.COLORS.primary};
        }
    }
`;

const SearchBox = styled.div`
    border: 1px solid #fff;
    border-radius: 4px;
`;


const Input = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    background-color: transparent;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
`;

const S = {
    Logo,
    Container,
    Wrapper,
    Ul,
    Input,
    SearchBox,
};
