import styled from "styled-components";
//c
const BgHeader = styled.div`
  background-image: url("https://dreamerz.net/static/media/wbackground.1cc4ec945a2f5bb65bd3.png");
  background-repeat: no-repeat;
  background-size: cover;
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
  @media screen and (max-width: 514px) {
    flex-direction: column;
    padding: 24px;
  }
  @media screen and (min-width: 515px) {
    flex-direction: row;
    padding: 24px;
  }
  @media screen and (max-width: 299px) {
    padding: 24px 0;
  }
`
const BgGalaxy = (props) => {
    return <BgHeader top={props.top} bottom={props.bottom}>
        {props.children}
    </BgHeader>
}

export default BgGalaxy;
