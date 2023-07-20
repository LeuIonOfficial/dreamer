import styled from "styled-components";

const Links = styled.a`
    text-decoration: none`

const LinksForPages = (props) => {
    return <Links>
        {props.children}
    </Links>
}
export default LinksForPages;
