import styled from "styled-components";

const TextDetails = styled.p`
font-family: Space Grotesk,serif;
  font-size: 14px;
  margin-left: 5px;
  margin-bottom: ${props => props.bottom || "auto"};
  `
const CardText = (props) => {
   return <TextDetails margin-bottom={props.bottom}>{props.children}</TextDetails>
}

export default CardText;
