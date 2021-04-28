import styled from "styled-components";


const Header = props => {
    return(
        <Nav>
            <NavLogo>
                <img src='/images/header/logo.svg' alt='logo'/>
            </NavLogo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/header/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/header/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/header/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/header/original-icon.svg" alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/header/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/header/series-icon.svg" alt="SERIES" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <SignIn>
                Login
            </SignIn>
        </Nav>
    )
}

export default Header;

const Nav = styled.header`
    position: fixed;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    z-index: 3;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavLogo = styled.a`
    padding-bottom: 17px;
    width: 80px;
    max-height: 70px;
    font-size: 0;
    display: block;
    img {
        object-fit: contain;
        width: 100%;
    }
`;

const NavMenu = styled.nav`
    display: flex;
    aling-items: center;
    a{
        cursor: pointer;
        font-size: 14px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img{
            padding-right: 5px;
            padding-bottom: 1px;
            width: 25px;
        }
        &:before{
            content: '';
            position: absolute;
            bottom: -5px;
            left: 5px;
            right: 0;
            width: 0;
            height: 1px;
            background-color: #fff;
            transition: 0.3s ease-in;
        }
        &:hover, &:active{
            opacity: .7;
            &:before{
                width: 100%;
            }
        }
    }
`;

const SignIn = styled.button`
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    text-transform: uppercase;
    &:hover{
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
    }
`;
