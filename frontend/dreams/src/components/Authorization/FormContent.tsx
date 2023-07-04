import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  & h3 {
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }
`

export const FormContent = (props) => {
    return (
        <Content>
            {props.children}
        </Content>
    )
}

