import styled from "styled-components";
import MyProfileList from "./MyProfileList";
//c
const CardWrapperO = styled.div`
  position: absolute;
  height: ${props => props.height || "0px"};
  overflow: hidden;
  top: 130%;
  //padding: 0;
  right: 0;
  //margin: 0px;
  width: ${props => props.width || "180px"};
  box-shadow: 0 0 1.25rem 0 rgba(0,0,0,.1);
  z-index: 1000;
/*  @media screen and (max-width: 500px) {
    box-shadow: none;
  }*/
`

const CardWrapperOpen = (props) => {
    return (
        <CardWrapperO height={props.height} width={props.width}>
            {props.children}
        </CardWrapperO>
    )
}
export default CardWrapperOpen;
