import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContainerDreamerz = styled.div`
  background-image: url("./../../assets/images/7.JPG");
  background-color: #0f013f;
  height: 880px;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 50px;
    width: 768px;
    background-size: cover;
  }
`;

const DreamerzH1 = styled.div`
  color: #f1ebeb;
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;
  margin-top: 67px;
  margin-left: 200px;

  @media (max-width: 768px) {
    margin: 10px;
    margin-top: 100px;
    font-size: 28px;
    text-align: center;
  }
`;

const Paragraf = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  margin-top: 0;
  margin-left: 200px;
  font-family: "Space Grotesk", serif;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
    font-size: 17px;
  }
`;

const Buton = styled.button`
  border-radius: 43px;
  height: 72px;
  width: 350px;
  margin-left: 390px;
  margin-top: 250px;
  transform: translate(-60%);
  background: linear-gradient(
    297.06deg,
    #f8ed84 23.88%,
    #f5e0ff 66.2%,
    #84fad5 109.31%
  );

  @media (max-width: 768px) {
    margin: 30px auto;
    height: 50px;
    width: 250px;
    margin-left: 400px;
    align-items: center;
    
    
  }
`;

const ImageOneDreamers = styled.div`
  display: flex;
  align-items: flex-end;
  box-shadow: none;
  width: 50%;
`;

const ImageOne = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media(max-width: 768px){
    margin-left: 200px;
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
                        This is the place where dreams come true! Sharing a $tar for a dream
                        you will receive back twice for your own dream.
                    </Paragraf>
                </div>
                <Buton onClick={redirectionareSignUp1}>Try Now</Buton>
            </div>
            <ImageOneDreamers>
                <ImageOne
                    src="./../../../../src/assets/images/7.JPG"
                    alt="img-one"
                />
            </ImageOneDreamers>
        </ContainerDreamerz>
    );
};

export default WhatIsDreamerz;
