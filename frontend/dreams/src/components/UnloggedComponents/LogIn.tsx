import styled from "styled-components";

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
  text-decoration: none;
  :hover {
    font-weight: 900;
  }
  
  :link{
    text-decoration: none;
  }
`

const LogIn = (props) => {
    return <StyledButton color={props.color}>
        {props.children}
    </StyledButton>
};

export default LogIn;
