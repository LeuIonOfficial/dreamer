import styled from "styled-components";


const ButtonButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  height: 48px;`

const ButtonsTogether = (props) => {
   return <ButtonButton>
        {props.children}
    </ButtonButton>
}
export default ButtonsTogether;
