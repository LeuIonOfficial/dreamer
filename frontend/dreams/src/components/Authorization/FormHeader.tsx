import styled from "styled-components";

const Form = styled.div`
  & h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: rgb(51, 51, 51);
    margin-bottom: 20px;
  }
  
  & h3 {
    color: #828282;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
`



const FormHeader = (props) => {
    return (
        <Form {...props}>
            {props.children}
        </Form>
    )
}

export default FormHeader