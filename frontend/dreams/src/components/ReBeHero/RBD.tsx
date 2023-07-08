import styled from "styled-components";
import {useNavigate} from 'react-router-dom'


const RbdContainer = styled.div`

  height: 500px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  display: flex;
  @media only screen and (width <= 800px) {
    display: none;
  }
`

const ButtonRBD = styled.button`
  background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
  border-radius: 43px;
  height: 72px;
  width: 350px;
  border: aliceblue;
`

const H2RBD = styled.h2`
  color: #333;
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;
  margin: 40px;
`

const Description = styled.p`
  font-size: 38px;
  color: #c3021f;
  align-items: center;
`
const RbdContainerMob = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (width > 800px ) {
    display: none;
  }
`

const H2RBDMob = styled.div`
  color: #333;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  box-sizing: border-box;
`

const DescriptionMob = styled.p`
  font-size: 26px;
  color: #c3021f;
  display: flex;
  align-self: center;
`
const ButtonRBDMob = styled.div`
  background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
  border-radius: 43px;
  height: 48px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Rbd = () => {
    const navigate = useNavigate()
    return (
        <div>
            <RbdContainer>
                <Description>Repair your carma!</Description>
                <H2RBD>Ready to become a dreamer?</H2RBD>
                <div>
                    <ButtonRBD onClick={() => navigate("/signup")}>Try Now </ButtonRBD>
                </div>
            </RbdContainer>

            <RbdContainerMob>
                <DescriptionMob>Repair your carma!</DescriptionMob>
                <H2RBDMob>Ready to become a dreamer?</H2RBDMob>
                <div>
                    <ButtonRBDMob onClick={() => navigate("/signup")}>
                        <span>Try now</span>
                    </ButtonRBDMob>
                </div>
            </RbdContainerMob>
        </div>
    )
}

export default Rbd
