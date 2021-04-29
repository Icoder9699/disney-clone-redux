import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { 
    selectUserEmail, 
    selectUserName, 
    selectUserPhoto, 
    setSignOutState, 
    setUserLoginDetails 
} from "../app/features/user/userSlice";
import { auth, provider } from "../firebase";

// routing 
import { useHistory, Link } from 'react-router-dom';


const Header = props => {
    const dispatch  = useDispatch(); // to use redux functional
    // mapstatetoprops .... got selectors 
    const userName  = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);
    const history   = useHistory();


    // if authenticated == true 
    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if(user){
                setUser(user);
                history.push('/home')
            }
        })
    }, [userName])

    const authHandler = () =>{
        auth.signInWithPopup(provider)
        .then(res => {
            setUser(res.user)
        })
        .catch(e => {
            console.log(e);
        })
    }

    const logoutHandler = () => {
        auth.signOut()
        dispatch(setSignOutState())
    }

    const setUser = user => {
        dispatch(setUserLoginDetails({
            userName: user.displayName,
            userEmail: user.email,
            userPhoto: user.photoURL,
        }))
    }

    return(
        <Nav>
            <NavLogo>
                <img src='/images/header/logo.svg' alt='logo'/>
            </NavLogo>

            { userName ? 
                <>
                    <NavMenu>
                        <Link to="#" href="/home">
                            <img src="/images/header/home-icon.svg" alt="HOME" />
                            <span>HOME</span>
                        </Link>
                        <Link to="#">
                            <img src="/images/header/search-icon.svg" alt="SEARCH" />
                            <span>SEARCH</span>
                        </Link>
                        <Link to="#">
                            <img src="/images/header/watchlist-icon.svg" alt="WATCHLIST" />
                            <span>WATCHLIST</span>
                        </Link>
                        <Link to="#">
                            <img src="/images/header/original-icon.svg" alt="ORIGINALS" />
                            <span>ORIGINALS</span>
                        </Link>
                        <Link to="#">
                            <img src="/images/header/movie-icon.svg" alt="MOVIES" />
                            <span>MOVIES</span>
                        </Link>
                        <Link to="#">
                            <img src="/images/header/series-icon.svg" alt="SERIES" />
                            <span>SERIES</span>
                        </Link>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown onClick={logoutHandler}>
                            <span >Sign Out</span>
                        </DropDown>
                    </SignOut>
                </>
                :
                <SignIn onClick={authHandler}>
                    Login
                </SignIn>
            }

        </Nav>
    )
}


const Nav = styled.header`
    position: fixed;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    z-index: 3;
    background-color: rgba(0, 0, 0, .7);
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
    margin-right: auto;
    display: flex;
    align-items: center;
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
    cursor: pointer;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    width: 120px;
    height: 40px;
    border-radius: 2px;
    text-transform: uppercase;
    &:hover{
        box-shadow: 0 0 5px #ccc;
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
    }
`;


const UserImg  = styled.img`
    cursor: pointer;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
`;

const DropDown = styled.div`
    width: 100px;
    transition-duration: 1s;
    cursor: pointer;
    text-align: center;
    border: 1px solid #ccc;
    padding: 7px;
    border-radius: 3px;
    position: absolute;;
    top: 60px;
    right: 15px;
    span{
        display: block;
    }
    &:hover{
        background-color: #fff;
        color: #000;
    }
    opacity: 0;
`;

const SignOut  = styled.div`
    border: 1px solid #000;
    position: relative;
    border-radius: 50%;
    &:hover{
        ${DropDown}{
            opacity: 1;
        }
    }
`;



export default Header;
