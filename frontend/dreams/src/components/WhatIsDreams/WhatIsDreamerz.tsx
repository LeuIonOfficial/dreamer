import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import image from './../../assets/images/11.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import image2 from './../../assets/images/12.png'

const ContainerDreamerz = styled.div`
  background-image: url(${image});
  height: 800px;
  background-size: cover;
  padding: 116px;
  display: flex;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 32px;
  }
  
`;

const DreamerzH1 = styled.div`
  color: #f1ebeb;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Paragraf = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const Buton = styled.button`
  border-radius: 43px;
  height: 72px;
  width: 350px;
  margin-top: 210px;
  background: linear-gradient(
    297.06deg,
    #f8ed84 23.88%,
    #f5e0ff 66.2%,
    #84fad5 109.31%
  );
  
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
  
  &:hover{
    font-size: 21px;
  }
  
`;

const ImageOneDreamers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ImageOne = styled.img`
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;


const WhatIsDreamerz: React.FC = () => {
    const navigate1 = useNavigate();

    const redirectionareSignUp1 = () => {
        navigate1("/signup");
    };

    return (
        <ContainerDreamerz>
            <div>
                <div>
                    <DreamerzH1>What is Dreamerz?</DreamerzH1>
                    <Paragraf>
                        This is the place where dreams
                        <br/>
                        come true! Sharing a $tar for a
                        <br/>
                        dream you will receive back twice
                        <br/>
                        for your own dream.
                    </Paragraf>
                </div>
                <Buton onClick={redirectionareSignUp1}>Try now</Buton>
            </div>
            <ImageOneDreamers>
                <ImageOne
                    src={image2}
                    alt="img-one"
                />
            </ImageOneDreamers>
        </ContainerDreamerz>
    );
};

export default WhatIsDreamerz;
