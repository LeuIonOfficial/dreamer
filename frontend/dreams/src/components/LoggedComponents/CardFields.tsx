import styled from "styled-components";

const CardFie = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const CardFields = (props) => {
    return <CardFie> {props.children}</CardFie>
}

export default CardFields;
