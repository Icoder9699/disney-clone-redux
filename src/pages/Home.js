import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Disney from "../components/Disney";
import Originals from "../components/Orginals";
import Recommends from "../components/Recommends";
import ImgSlider from "../components/Slider";
import Trending from "../components/Trending";
import Viewers from "../components/Viewers";

// firebase 
import db from '../firebase';
// redux 
import { setMovies } from '../app/features/movies/movieSlice';
import { selectUserName } from '../app/features/user/userSlice';

const Home = props => {
 
    // get user
    const userName = useSelector(selectUserName)
    let recommends = [];
    let disneys    = [];
    let trendings  = [];
    let originals  = [];
    // to redux store
    const dispatch = useDispatch();
    // work with firebase cloud 

    useEffect(() => {
        db.collection('movies').onSnapshot(spanshot => {
            spanshot.docs.map(doc => {
                switch(doc.data().type){
                    case 'recommend': 
                        recommends = [...recommends, {id: doc.id, ...doc.data()}]
                    break;
    
                    case 'new': 
                        disneys = [...disneys, {id: doc.id, ...doc.data()}]
                    break;
    
                    case 'trending': 
                        trendings = [...trendings, {id: doc.id, ...doc.data()}]
                    break;
    
                    case 'original': 
                        originals = [...originals, {id: doc.id, ...doc.data()}]
                    break;
                    default: return doc.data()
                }
            });
            // sent to redux store
            dispatch(setMovies({
                recommends,
                disneys,
                trendings,
                originals
                })
            );
        });
    }, [userName]);

    return(
        <Container>
            <ImgSlider />
            <Viewers/>
            <Recommends />
            <Disney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.div`
    text-aling: center;
    color: #fff;
    position: relative;
    top: 72px;
    background: url("/images/home/home-background.png") 0 0/cover  no-repeat;
    padding: 20px;
`;



export default Home;
