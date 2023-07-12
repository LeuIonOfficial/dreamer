import styled from "styled-components";

const Logo = styled.div`
  background-image: url('https://dreamerz.net/static/media/whiteLogo.d4409e777733dc79e6d8.svg');
  background-repeat: no-repeat;
// color: ${props => props.color};
// height: ${props => props.height};
// width: ${props => props.width};
// margin: ${props => props.margin}
  color: white;
  height: 60px;
  width: 160px;`

const DreamerzLogo = (props) => {
    return <Logo {...props}>

    </Logo>
}

export default DreamerzLogo;
