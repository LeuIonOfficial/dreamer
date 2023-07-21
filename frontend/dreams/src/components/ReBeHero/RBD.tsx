import styled from "styled-components";
import {useNavigate} from 'react-router-dom'


const RbdContainer = styled.div`

  height: 500px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  display: flex;
  @media (max-width: 800px) {
    height: 320px;
  }
`

const ButtonRBD = styled.button`
  background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
  border-radius: 43px;
  height: 72px;
  width: 350px;
  border: aliceblue;
  @media (max-width: 800px) {
    border-radius: 43px;
    height: 48px;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const H2RBD = styled.h2`
  color: #333;
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;
  margin: 40px;
  @media (max-width: 800px) {
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    margin: 0;
  }
`

const Description = styled.p`
  font-size: 38px;
  color: #c3021f;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 26px;
  }
`
const Rbd = () => {
    const navigate = useNavigate()
    return (
        <RbdContainer>
            <Description>Repair your carma!</Description>
            <H2RBD>Ready to become a dreamer?</H2RBD>
            <ButtonRBD onClick={() => navigate("/signup")}>Try Now </ButtonRBD>
        </RbdContainer>
    )
}

export default Rbd
