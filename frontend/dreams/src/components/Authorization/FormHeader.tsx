import styled from "styled-components";
import {ReactNode} from "react";

const Form = styled.div`
  & h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: rgb(51, 51, 51);
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