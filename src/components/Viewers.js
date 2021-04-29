import styled from "styled-components";


const Viewers = props => {
    return(
        <Container>
            <Wrap>
                <img src="/images/home/viewers/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/home/viewers/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/home/viewers/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/home/viewers/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted >
                <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/home/viewers/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted >
                <source
                    src="/videos/1564676296-national-geographic.mp4"
                    type="video/mp4"
                />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 20px;
    display: grid;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr)) ;
    grid-gap: 25px;
    gap: 25px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`;

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(0,0,0, .3);
    width: 100%;
    text-align: center;
    border-radius: 5px;
    background: rgba(0, 0, 0, .5);
    position: relative;
    padding-top: 56%;
    img{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }
    video{
        position: absolute;
        top: 0;
        z-index: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        opacity: 0.1;
    }
    &:hover{
        video{
            opacity: 1;
        }
    }
`;

export default Viewers;