import './ProjectPurpose.css'
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const ProjectPurposeStyle = styled.div`
  height: 809px;
  padding: 90px 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  font-family: 'Space Grotesk', sans-serif;
`;

const ProjectSectionPurpose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 518px;
  margin-right: 35px;
`;

const HeadingPurpose = styled.h1`
  color: black;
  font-size: 64px;
  line-height: 1;
  margin-bottom: -40px;
`;

const ParagraphPurpose = styled.p`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  color: #9e9e9e;
`;

const ImagePurpose = styled.img`
  width: 700px;
  background-image: url("./img/myDream.8d70a4aefa9db11f815a.png");
`;
const ButtonEasier = styled.div`
  background: linear-gradient(297.06deg , #f8ed84 23.88% , #f5e0ff 66.2% , #84fad5 109.31%);
  border-radius: 43px;
  height: 72px;
  width: 350px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextButtonEasier = styled.span`
  color: #262626;
  font-size: 16px;
  letter-spacing: 0.14em;
`;

const ProjectPurpose = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/signup');
    };


    return(

        <ProjectPurposeStyle>
            <ProjectSectionPurpose>
                <HeadingPurpose>Project Purpose</HeadingPurpose>
                <ParagraphPurpose>
                    Our main goal is to unite people from all over the world and help them fulfill their dreams.
                    <br/>
                    Working together in a friendly community for a brighter future.
                </ParagraphPurpose>
                <ButtonEasier onClick={handleButtonClick}>
                    <TextButtonEasier>Try now</TextButtonEasier>
                </ButtonEasier>
            </ProjectSectionPurpose>
            <ImagePurpose src="" alt="dream" />
        </ProjectPurposeStyle>

    )
}

export default ProjectPurpose