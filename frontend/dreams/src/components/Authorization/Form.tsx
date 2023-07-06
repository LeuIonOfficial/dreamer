import styled from "styled-components";

const StyledForm = styled.form`
  //position: absolute;
  width: 400px;
  height: 550px;
  background: #fff;
  box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
  //top: 50%;
  //left: 50%;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 35px;
  //transform: translate(-50%, -50%);
`

const Form = (props) => {
    return (
        <StyledForm onSubmit={props.onSubmit} {...props}>
            {props.children}
        </StyledForm>
    )
}

export default Form