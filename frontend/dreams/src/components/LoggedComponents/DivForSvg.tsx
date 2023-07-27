import styled from "styled-components";

const ForSvg = styled.div`
    display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
`

const DivForSvg = (props) => {
    <ForSvg>
        {props.children}
    </ForSvg>
}
export default DivForSvg;
