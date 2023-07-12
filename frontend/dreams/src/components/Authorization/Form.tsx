import styled from "styled-components";

const StyledForm = styled.form`
  height: 550px;
  background: #fff;
  box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 35px;
`

const Form = (props) => {
    return (
        <StyledForm onSubmit={props.onSubmit} {...props} className='w-[300px] md:w-[400px] lg:w-[400px] m-5'>
            {props.children}
        </StyledForm>
    )
}

export default Form