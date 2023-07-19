import styled from "styled-components";

const BgHeader = styled.div`
  background-image: url("https://dreamerz.net/static/media/wbackground.1cc4ec945a2f5bb65bd3.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  right: 0;
  left: 0;
  position: relative;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  margin: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  @media screen and (min-width: 481px) {
    flex-direction: row;
  }
`
const BgGalaxy = (props) => {
    return <BgHeader top={props.top} bottom={props.bottom}>
        {props.children}
    </BgHeader>
}

export default BgGalaxy;
