import './ProjectPurpose.css'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContainerEasier = styled.div`
  background-image: url("./img/Background4.ce0bbc248e40244237da.png");
  height: 775px;
  padding: 82px 160px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-family: 'Space Grotesk', sans-serif;
`;

const TextHeadingEasier = styled.h1`
  color: white;
  font-size: 64px;
`;

const SectionEasier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

const ColumnEasier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RowEasier = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
`;

const NumberCircleEasier = styled.div`
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 27px;
  font-weight: 700;
  line-height: 82px;
  text-align: center;
  width: 82px;
`;

const TextContentEasier = styled.p`
  font-size: 23px;
  color: white;
  line-height: 1;
  margin-left: 20px;
  width: 270px;
`;

const ButtonEasier = styled.button`
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


const Easier = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/signup');
    };


    return (
        <ContainerEasier>
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
        </ContainerEasier>


    );

}

export default Easier