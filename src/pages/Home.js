import styled from "styled-components";
import ImgSlider from "../components/Slider";
import Viewers from "../components/Viewers";


const Home = props => {
    return(
        <Container>
            <ImgSlider />
            <Viewers/>
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
