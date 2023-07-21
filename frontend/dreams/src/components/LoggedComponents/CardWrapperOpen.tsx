import styled from "styled-components";
//c
const CardWrapperO = styled.div`
  position: absolute;
  height: ${props => props.height || "0px"};
  overflow: hidden;
  top: 100%;
  right: 10%;
  width: 180px;
  box-shadow: 0 0 1.25rem 0 rgba(0,0,0,.1);
`

const CardWrapperOpen = (props) => {
    return (
        <CardWrapperO height={props.height}>
            {props.children}
        </CardWrapperO>
    )
}
export default CardWrapperOpen;
