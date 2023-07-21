import styled from "styled-components";

const LinkBu = styled.button`
   border: none;
   background: transparent;
   color: #777d74;
   &:hover{
      color: black;
   }`

const LinkButton = (props) => {
   return <LinkBu> {props.children} </LinkBu>;
}
export default LinkButton;
