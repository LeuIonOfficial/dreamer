import styled from "styled-components";

const StyledForm = styled.form`
  height: fit-content;
  background-clip: content-box, border-box;
  background-image: linear-gradient(#fff, #fff), linear-gradient(150.93deg, #84fad5 1.02%, #ebbfff 44.33%, #f6ec85 76.07%);
  background-origin: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0 33px 20px rgba(0, 0, 0, .06), 0 7.371px 4.467px rgba(0, 0, 0, .01), 0 2.195px 1.33px rgba(0, 0, 0, .01);
  
  margin: 50px;
  width: 400px;
  
  @media (max-width: 768px) {
    margin: 20px;
    width: 300px;
  }
`

const Border = styled.div`
  padding: 35px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Form = (props) => {
    return (
        <StyledForm onSubmit={props.onSubmit} {...props}>
            <Border>
                {props.children}
            </Border>
        </StyledForm>
    )
}

export default Form