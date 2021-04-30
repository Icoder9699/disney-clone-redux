import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {selectMovies} from '../../app/features/movies/bySearchSlice';
import { useSelector } from 'react-redux';

const Items = () =>{
    const moviesDB = useSelector(selectMovies)

    return (
        <Container>
            { moviesDB && moviesDB.map(movie => {
                    return (
                        <Item key={movie.id}>
                            <Link to={'/detail/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />  
                            </Link>
                        </Item>
                    )
            }) 
            }
        </Container>
    )
}

const Container = styled.div`
    margin-top: 50px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
`;

const Item = styled.div`
    position: relative;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-top: 56%;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 200ms ease-in-out;
    box-shadow: 0 0 5px 1px black;
    img{
        border-radius: 10px;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
    &:hover{
        box-shadow: 0 0 5px 2px #fff;
        border: 3px solid rgba(249, 249, 249, 0.8);
        transform: scale(1.05); 
    }
`;


export default Items;