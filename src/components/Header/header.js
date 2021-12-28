import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogoImg from '../../images/tmdb_logo.svg';
import { Content, LogImg, Wrapper, TMDBImg } from './header.style';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogImg src={RMDBLogo} />
            </Link>
            <TMDBImg src={TMDBLogoImg} alt='alternate-image' />
        </Content>
    </Wrapper>);


export default Header;
