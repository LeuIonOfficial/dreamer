import styled from "styled-components";
//c
const Container3 = styled.div`
width: 300px;
  margin: 0;
position: relative;
padding: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${props => props.justify};
`

const DivContainer = (props) => {
    return (
        <Container3 {...props}>
            {props.children}
        </Container3>
    )
}

export default DivContainer;
