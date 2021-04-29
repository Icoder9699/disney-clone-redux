import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectRecommend } from '../app/features/movies/movieSlice';


const Recommends = props => {
    // get db from redux store 
    const movies = useSelector(selectRecommend);
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Row>
                { movies && movies.map(movie => {
                    return (
                        <Item key={movie.id}>
                            <Link to={'/detail/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Item>
                    )
                })}
            </Row>
        </Container>
    )
};

const Container = styled.div`

`;

const Row = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    @media(max-width: 768px ){
        flex-wrap: wrap;

    }
`;

const Item = styled.div`
    cursor: pointer;
    margin: 10px 10px;
    border: 3px solid rgba(255, 255, 255, .1);
    height: 200px;
    width: 25%;
    border-radius: 10px;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        border-radius: 10px;
        position: absolute;
        top:  0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    &:hover{
        border-color: #fff;
        box-shadow: 0 0 5px #fff;
        transform: scale(1.05);
    }
    @media(max-width: 768px ){
        width: 30%;
        height: 100px;
        flex: 1 0 auto;
    }
`;



export default Recommends;