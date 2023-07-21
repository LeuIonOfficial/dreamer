import styled from "styled-components";

const TextOnButton = styled.span`
  color: black;
  text-decoration: none;
  
  :link{
    text-decoration: none;
  }
`

const ButtonName = ({children}) => {
    return <TextOnButton> {children} </TextOnButton>;
}

export default ButtonName;
