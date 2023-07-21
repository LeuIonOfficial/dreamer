import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(297.06deg , #f8ed84 23.88% , #f5e0ff 66.2% , #84fad5 109.31%);
  border-radius: 43px;
  height: 72px;
  width: 350px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    font-weight: 700;
    cursor: pointer;
  }
  @media only screen and (max-width: 800px){
    height: 43px;
    width: 100%;
  }
`;

const TextButton = styled.span`
  color: #262626;
  font-size: 16px;
  letter-spacing: 0.14em;
`;
const ButtonTryNow = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/signup');
    };
    return (
        <Button onClick={handleButtonClick}>
        <TextButton>{`Try now`}</TextButton>
        </Button>
)
}
export default ButtonTryNow

