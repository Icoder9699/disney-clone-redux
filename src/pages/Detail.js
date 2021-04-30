import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import db from '../firebase';

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    // get db from firebase store
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ContentMeta>
        <ImageTitle>
          <img alt={detailData.title} src={detailData.titleImg} />
        </ImageTitle>
        <Controls>
          <Player>
            <img src="/icons/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/icons/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/icons/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 71px;
  margin: 20px;
`;

const Background = styled.div`
  position: absolute;
  top: 71px;
  left: 0;
  opacity: 0.8;
  z-index: -1;
  height: 100%;;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  width: 250px;
  img{
    width: 100%;
    heigth: 100%;
  }
  margin-bottom: 50px;
`;

const ContentMeta = styled.div`
  display: flex;
  max-width: 874px;
  flex-direction: column;
  margin: 70px 0 0 50px;
  @media(max-width: 768px){
    margin: 0 auto;
  }
`;

const Controls = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 50px;
  @media(max-width: 768px){
    width: 350px;
  }
`;

const Player = styled.button`
  transition: all .5s ease-in;
  display: flex;
  align-items: center;
  width: 100px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .5);
  border: 1px solid #000;
  &:hover{
    box-shadow: 0 0 5px #000;
    transform: scale(1.02);
  }
  span{
    display: block;
  }
`;

const Trailer = styled(Player)`
  color: #fff;
  background: transparent;
  border-color: #fff;
  border: 1px solid #fff;
  &:hover{
    box-shadow: 0 0 5px #fff;
    transform: scale(1.02);
  }
`;

const AddList = styled.div`
  transition: all .5s ease-in;
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;
  &:hover{
    box-shadow: 0 0 5px #000;
  }
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  transition: all .5s ease-in;
  border: 1px solid #000;
  cursor: pointer;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .5);
  img{
    width: 100%;
    object-fit: contain;
  }
  &:hover{
    box-shadow: 0 0 5px #000;
    border-color: #000;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Detail;