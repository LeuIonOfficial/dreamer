import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import image from './img/myDream.8d70a4aefa9db11f815a.png';

const ProjectPurposeStyle = styled.div`
  
  height: 609px;
  padding: 90px 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  font-family: 'Space Grotesk', sans-serif;
  box-sizing: border-box;

  @media screen and (max-width: 799px) {
    padding: 40px 9px 29px 20px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 431px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px){
    height: 400px;
    padding: 90px 18px;
  }
  //@media screen and (min-width: 951px) and (max-width: 1200px){
  //  height: 300px;
  //  padding: 90px 18px;
  //}
`;

const ProjectSectionPurpose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  margin-right: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    height: 300px;
  }

`;

const HeadingPurpose = styled.h1`
  color: #333;
  font-size: 64px;
  line-height: 65px;
  font-weight: 700;

  @media screen and (max-width: 799px) {
    font-size: 21px;
    line-height: 34px;
    font-weight: 700;
    align-items: center;
    margin-top: -26px;
    margin-bottom: 10px;
    
  }
  @media screen and (min-width: 800px)  and (max-width: 1200px){
    font-size: 38px;
    line-height: 34px;
    font-weight: 700;
    align-items: center;
    margin-top: -26px;
    margin-bottom: 10px;
  }
`;

const ParagraphPurpose = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: #333;
  margin: 0;

  @media screen and (max-width: 799px) {
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    height: 145px;
    width: 75%;
    color: #2c2c2c;
  }
  @media screen and (min-width: 800px) and (max-width: 950px){
    font-size: 16px;
    line-height: 22px;
    text-align: left;
  }
  @media screen and (min-width: 950px) and (max-width: 1200px){
    font-size: 13px;
    line-height: 22px;
    
  }
`;

const ImagePurpose = styled.img`
  width: 700px;

  @media screen and (max-width: 799px) {
    width: 70%;
    max-width: 500px;
    margin-top: -50px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 52%;
    max-width: 500px;
    //margin-bottom: 54px;
  }
`;

const ButtonPurpose = styled.button`
  background: linear-gradient(297.06deg , #f8ed84 23.88% , #f5e0ff 66.2% , #84fad5 109.31%);
  border-radius: 43px;
  height: 72px;
  width: 350px;
  //cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover{
    font-weight: 700;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    height: 48px;
    width: 100%;
  }
  //@media screen and (min-width: 799px) and (max-width: 1200px){
  //  height: 48px;
  //  width: 100%;
  //}
`;

const TextButtonPurpose = styled.span`
  color: #262626;
  font-size: 16px;
  letter-spacing: 0.14em;
`;
const ProjectPurpose = () => {

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

    return(

        <ProjectPurposeStyle>
            <Default>
            <ProjectSectionPurpose>
                <HeadingPurpose>Project Purpose</HeadingPurpose>
                <ParagraphPurpose>
                    Our main goal is to unite people from all over the world and help them fulfill their dreams.
                    <br/>
                    Working together in a friendly community for a brighter future.
                </ParagraphPurpose>
                {/*<ButtonTryNow onClick={handleButtonClick}/>*/}
                <ButtonPurpose onClick={handleButtonClick}>
                    <TextButtonPurpose>Try now</TextButtonPurpose>
                </ButtonPurpose>
            </ProjectSectionPurpose>
            <ImagePurpose src={image} alt="dream" />
            </Default>

            <Mobile>
                <ProjectSectionPurpose>
                    <HeadingPurpose>Project Purpose</HeadingPurpose>
                    <ParagraphPurpose>
                        Our main goal is to unite people from all over the world and help them fulfill their dreams.
                        <br/>
                        Working together in a friendly community for a brighter future.
                    </ParagraphPurpose>
                    <ImagePurpose src={image} alt="dream" />
                    {/*<ButtonTryNow onClick={handleButtonClick}/>*/}
                    <ButtonPurpose onClick={handleButtonClick}>
                        <TextButtonPurpose>Try now</TextButtonPurpose>
                    </ButtonPurpose>
                </ProjectSectionPurpose>
            </Mobile>
        </ProjectPurposeStyle>

    )
}

export default ProjectPurpose