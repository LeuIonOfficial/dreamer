import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import image from './../../assets/images/11.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import image2 from './../../assets/images/12.png'
import {useMediaQuery} from "react-responsive";
import ButtonTryNow from "../ButtonTryNow/ButtonTryNow";

const ContainerDreamerz = styled.div`
  background-image: url(${image});
  //height: 800px;
  background-size: cover;
  padding: 116px;
  display: flex;
  //justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;

  @media screen and (max-width: 800px) {
    height: 530px;
    flex-direction: column;
    padding: 32px;
  }

`;

const DreamerzH1 = styled.div`
  color: #f1ebeb;
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    font-size: 24px;
    text-align: center;
    margin-bottom: 0;
  }
`;

const Paragraf = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    text-align: center;
    line-height: 14px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px){
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    width: 75%;
  }
`;
const TextAndButon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  //height: 100%;

`

// const Buton = styled.div`
//   background: linear-gradient(297.06deg , #f8ed84 23.88% , #f5e0ff 66.2% , #84fad5 109.31%);
//   border-radius: 43px;
//   height: 72px;
//   width: 350px;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 180px;
//
//   &:hover{
//     font-weight: 700;
//     cursor: pointer;
//   }
//
//   @media screen and (max-width: 800px) {
//     height: 105px;
//     width: 100%;
//     margin-top: 30px;
//
//   }
//
// `;
const TextButtonEasier = styled.span`
  color: #262626;
  font-size: 16px;
  letter-spacing: 0.14em;
`;

const ImageOneDreamers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

const ImageOne = styled.img`
  width: 500px;

  @media screen and (max-width: 800px) {
    width: 250px;
    margin: 0 auto;
  }
`;
const ButtonDiv = styled.div`
  @media screen and (min-width: 800px) and (max-width: 1200px){
    margin-top: 40px;
    margin-left: 0;
  }
`

const WhatIsDreamerz: React.FC = () => {
    const navigate1 = useNavigate();

    const redirectionareSignUp1 = () => {
        navigate1("/signup");
    };
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 801 })
        return isNotMobile ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 800 })
        return isMobile ? children : null
    }

    return (
        <ContainerDreamerz>
            <Default>
                <TextAndButon>
                    <div>
                        <DreamerzH1>What is Dreamerz?</DreamerzH1>
                        <Paragraf>
                            This is the place where dreams
                            come true! Sharing a $tar for a
                            dream you <br/> will receive back twice
                            for your own dream.
                        </Paragraf>
                    </div>
                    <ButtonDiv>
                        <ButtonTryNow onClick={redirectionareSignUp1}>
                            <TextButtonEasier>{`Try now`}</TextButtonEasier>
                        </ButtonTryNow>
                    </ButtonDiv>
                </TextAndButon>
                <ImageOneDreamers>
                    <ImageOne
                        src={image2}
                        alt="img-one"
                    />
                </ImageOneDreamers>
            </Default>

            <Mobile>
                <DreamerzH1>What is Dreamerz?</DreamerzH1>
                <Paragraf>
                    This is the place where dreams
                    come true!
                    <br/>
                    Sharing a $tar for a
                    dream you will
                    <br/>
                    receive back twice
                    for your own dream.
                </Paragraf>
                <ImageOneDreamers>
                    <ImageOne
                        src={image2}
                        alt="img-one"
                    />
                </ImageOneDreamers>
                <ButtonDiv>
                <ButtonTryNow onClick={redirectionareSignUp1}>
                    <TextButtonEasier>{`Try now`}</TextButtonEasier>
                </ButtonTryNow>
                </ButtonDiv>
            </Mobile>
        </ContainerDreamerz>
    );
};

export default WhatIsDreamerz;

