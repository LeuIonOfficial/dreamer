import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  & div {
    margin-top: 10px;
  }

  & #text {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #777d74;

    & button {
      color: #50b5ff;
    }

  }

  & #btn {
    width: 100%;
    color: black;
  }

`

const FormFooter = (props) => {
    return <Footer {...props}> {props.children} </Footer>
}

export default FormFooter