import styled from "styled-components";
//c
const ButtonButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  padding: 0px;
@media screen and (max-width: 500px) {
  justify-content: space-around;
  width: 100%;
}
  @media screen and (min-width: 501px) {
    justify-content: space-between;
    width: 330px;
  }
`
//add media here
const ButtonsTogether = (props) => {
   return <ButtonButton>
        {props.children}
    </ButtonButton>
}
export default ButtonsTogether;
