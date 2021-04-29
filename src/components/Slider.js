import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = props => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <Carousel {...settings}>
            <Wrap>
                <img src='/images/home/slider/slider-badag.jpg' alt='img' />
            </Wrap>
            <Wrap>
                <img src='/images/home/slider/slider-badging.jpg' alt='img' />
            </Wrap>
            <Wrap>
                <img src='/images/home/slider/slider-scale.jpg' alt='img' />
            </Wrap>
            <Wrap>
                <img src='/images/home/slider/slider-scales.jpg' alt='img' />
            </Wrap>
        </Carousel>
    )
}

const Carousel = styled(Slider)`    
    margin-bottom: 20px;
    overflow: hidden;
    .slick-list {
        overflow: initial;
      }
    .slick-next{
        right: 5px;
    }
    .slick-prev{
        z-index: 1;
        left: 5px;
    }
    &>button{
        opacity: 1;
    }
    &:hover{
        &>button{
            opacity: 1;
        }
    }
    .slick-dots li {
        button{
            &:before{
                font-size: 15px;
            }
        }
    }
   

`;

const Wrap = styled.div`
    border-radius: 5px;
    border: 5px solid rgba(0, 0, 0, .1 );
    &:hover{
        border: 5px solid #fff;
    }
    img{
        border-radius: 5px;
        width: 100%;
        object-fit: cover;
    }
`;

export default ImgSlider;