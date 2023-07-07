import styled from "styled-components";

const Footer = styled.div`
  align-self: center;
  
  & span {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(130, 130, 130)
  }
  
  & button {
    color: #50b5ff;
  }
`

const FormFooter = (props) => {
    return <Footer {...props}> {props.children} </Footer>
}

export default FormFooter