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

interface IProps {
	props: ReactNode
}

export const FormHeader = (props): IProps => {
	return (
		<Form {...props}>
			{props.children}
		</Form>
	)
}