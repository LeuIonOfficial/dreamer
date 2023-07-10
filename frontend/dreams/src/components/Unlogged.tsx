import "./Unlogged.scss";
import styled from "styled-components";
import BgGalaxy from "./UnloggedComponents/BgGalaxy.tsx";
import DreamerzLogo from "./GeneralComponents/DreamerzLogo.tsx";

const Global = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
`

const ButtonsTogether = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  height: 48px;`

const StyledButton = styled.div`
  width: 160px;
  height: 48px;
  background: ${props => props.color};
  border-radius: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  cursor: pointer;

  :hover {
    font-weight: 900;
  }
`

const LogIn = ({children, color}) => {
    return <StyledButton color={color}>
        {children}
    </StyledButton>
};


const TextOnButton = styled.span`
  color: black;
`

const ButtonName = ({children}) => {
    return <TextOnButton> {children} </TextOnButton>;
}

function Unlogged() {
    return (
        <BgGalaxy>

            <DreamerzLogo></DreamerzLogo>
            <ButtonsTogether>
                <LogIn color={'white'}>
                    <ButtonName>Log in</ButtonName>
                </LogIn>
                <LogIn color={'linear-gradient(297.06deg,#f8ed84 23.88%,#f5e0ff 66.2%,#84fad5 109.31%)'}>
                    <ButtonName>Sign up</ButtonName>
                </LogIn>
            </ButtonsTogether>

        </BgGalaxy>
    )
}

export default Unlogged;

