import styled from "styled-components";
import {useNavigate} from "react-router-dom";
//c
const TextOnButton = styled.button`
  color: black;
  text-decoration: none;
  
  :link{
    text-decoration: none;
  }
`
// const navigate = useNavigate();

const ButtonName = (props) => {
    return <TextOnButton onClick={props.onClick}> {props.children} </TextOnButton>;
}

export default ButtonName;
