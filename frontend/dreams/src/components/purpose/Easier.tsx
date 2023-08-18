import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Background from './img/Background4.ce0bbc248e40244237da.png'
import ButtonTryNow from "../ButtonTryNow/ButtonTryNow";
import {useMediaQuery} from "react-responsive";

const ContainerEasier = styled.div`
  background-image: url(${Background});
  //height: 775px;  
  padding: 82px 160px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-family: 'Space Grotesk', sans-serif;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
      padding: 20px;
      height: auto;
  }
`;


const TextHeadingEasier = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;

  @media screen and (max-width: 1000px) {
      font-size: 39px;
    line-height: 43px;
    margin-left: 13px;
    width: 67%;
    margin-bottom: 20px;
    font-weight: 700;
  }
`;

const SectionEasier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin-top: 80px;

  @media screen and (max-width: 1000px) {
    margin-top: 20px;
    margin-left: 13px;
  }
  
`;

const ColumnEasier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 88%;
  }
`;

const RowEasier = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
    margin-bottom: 27px;
  }
`;

const NumberCircleEasier = styled.div`
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 27px;
  font-weight: 700;
  line-height: 82px;
  //height: 82px;
  text-align: center;
  width: 100px;


  @media screen and (min-width: 0) and (max-width: 400px){
    font-size: 16px;
    width: 62px;
    line-height: 45px
  }
   @media screen and (min-width: 401px) and (max-width: 1200px){
     font-size: 16px;
     border-radius: 50%;
     width: 58px;
     //height: 58px;
     line-height: 48px;
   } 
`;

const TextContentEasier = styled.p`
  font-size: 33px;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-left: 20px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    font-size: 19px;
    font-weight: 700;
    line-height: 1;
    margin-left: 20px;
`;

const ButtonEasier = styled.button`
  background: linear-gradient(297.06deg , #f8ed84 23.88% , #f5e0ff 66.2% , #84fad5 109.31%);
  border-radius: 43px;
  height: 72px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  
  &:hover{
    font-weight: 700;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    height: 43px;
    width: 100%;
  }
`;

const TextButtonEasier = styled.span`
  color: #262626;
  font-size: 16px;
  letter-spacing: 0.14em;
`;


const Easier = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/signup');
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
        <ContainerEasier>
            <Default>
            <TextHeadingEasier>It's easier than you think</TextHeadingEasier>
            <SectionEasier>
                <ColumnEasier>
                    <RowEasier>
                        <NumberCircleEasier>1</NumberCircleEasier>
                        <TextContentEasier>Set your dream</TextContentEasier>
                    </RowEasier>
                    <RowEasier>
                        <NumberCircleEasier>2</NumberCircleEasier>
                        <TextContentEasier>Start giving a half of your Dream</TextContentEasier>
                    </RowEasier>
                </ColumnEasier>
                <ColumnEasier>
                    <RowEasier>
                        <NumberCircleEasier>3</NumberCircleEasier>
                        <TextContentEasier>Receive back twice for your dream</TextContentEasier>
                    </RowEasier>
                    <RowEasier>
                        <NumberCircleEasier>4</NumberCircleEasier>
                        <TextContentEasier>Live your dream. Keep Dreaming!</TextContentEasier>
                    </RowEasier>
                </ColumnEasier>
            </SectionEasier>
            <ButtonEasier onClick={handleButtonClick}>
                <TextButtonEasier>{`Try now`}</TextButtonEasier>
            </ButtonEasier>
            </Default>

            <Mobile>
                <TextHeadingEasier>It's easier than you think</TextHeadingEasier>
                <SectionEasier>
                    <ColumnEasier>
                        <RowEasier>
                            <NumberCircleEasier>1</NumberCircleEasier>
                            <TextContentEasier>Set your dream</TextContentEasier>
                        </RowEasier>
                        <RowEasier>
                            <NumberCircleEasier>2</NumberCircleEasier>
                            <TextContentEasier>Start giving a half of your Dream</TextContentEasier>
                        </RowEasier>
                        <RowEasier>
                            <NumberCircleEasier>3</NumberCircleEasier>
                            <TextContentEasier>Receive back twice for your dream</TextContentEasier>
                        </RowEasier>
                        <RowEasier>
                            <NumberCircleEasier>4</NumberCircleEasier>
                            <TextContentEasier>Live your dream. Keep Dreaming!</TextContentEasier>
                        </RowEasier>
                    </ColumnEasier>
                </SectionEasier>
                <ButtonEasier onClick={handleButtonClick}>
                    <TextButtonEasier>{`Try now`}</TextButtonEasier>
                </ButtonEasier>
            </Mobile>
        </ContainerEasier>


    );

}

export default Easier