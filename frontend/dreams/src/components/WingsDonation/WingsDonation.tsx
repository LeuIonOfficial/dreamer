import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import ButtonTryNow from "../ButtonTryNow/ButtonTryNow";


const GlobalDiv = styled.div`
  box-sizing: border-box;
  font-family: 'Space Grotesk', sans-serif;
`
const MainBox = styled.div`
  padding: 80px 70px 80px 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (width <= 1080px) {
    display: none;
  }
`
const DonationImage = styled.img`
  width: 494px;
  margin-right: 48px;
  @media only screen and (width <= 1098px ) {
    width: 494px;
  }
  @media only screen and (width <= 800px ) {
  }
`
const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;

  & h2 {
    color: #333;
    font-size: 64px;
    font-weight: 700;
    line-height: 65px;

  }

  & p {
    color: #333;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    margin-top: 10%;
    margin-bottom: 10%;

  }
`
const Button = styled.div`
  width: 350px;
  height: 72px;
  border-radius: 43px;
  background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: #262626;
    font-size: 16px;
    letter-spacing: .14em;
    text-decoration: none;
    cursor: pointer;
  }
`
const MainContainerM = styled.div`
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (width > 1080px ) {
    display: none;
  }
`
const DonationImageM = styled.img`
  width: 252px;
  @media only screen and (width <= 1098px ) {
    padding-top: 40px;
    width: 494px;
  }

  @media only screen and (width <= 600px ) {
    width: 352px;
  }

`
const ContentDivM = styled.div`
  width: 75%;
  padding-bottom: 25px;

  & h2 {
    color: #333;
    font-size: 26px;
    font-weight: 700;
    line-height: 34px;
    text-align: center;
    margin-top: 10%;
    @media only screen and (width <= 1098px ) {
      font-size: 48px;
      margin-bottom: 20px;
    }
    @media only screen and (width <= 600px ) {
      font-size: 26px;
    }
  }

  & p {
    color: #2c2c2c;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    margin-top: 10%;
    margin-bottom: 5%;
    @media only screen and (width <= 1098px ) {
      font-size: 16px;

    }
    @media only screen and (width <= 600px ) {
      font-size: 12px;
    }
  }
`
const ButtonMobile = styled.div`
  background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
  border-radius: 43px;
  height: 48px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: #262626;
    font-size: 16px;
    letter-spacing: .14em;
    cursor: pointer;
  }
`
const WingsDonation = () => {
    const navigate = useNavigate();


    return (
        <GlobalDiv>

            <MainBox>
                <DonationImage src="./../../../../src/assets/wing/WingsImage.1e6f79f5963bda8647a3.png"
                               alt="WingDonation"/>
                <ContentContainer>
                    <h2>Wings Donations</h2>
                    <p>Wings donations are campaignes organized by Dreamerz with the aim of
                        charity,
                        helping people all over the world.</p>
                    {/*<Button onClick={() => navigate('login')}>*/}
                    {/*    <span>Try Now!</span>*/}
                    {/*</Button>*/}
                    <ButtonTryNow/>
                </ContentContainer>
            </MainBox>

            <MainContainerM>
                <DonationImageM src="./../../../../src/assets/wing/WingsImage.1e6f79f5963bda8647a3.png" alt="Wings"/>
                <ContentDivM>
                    <h2>Wings Donation</h2>
                    <p>Wings donations are campaignes organized by Dreamerz with the aim of charity, helping people all
                        over the world.</p>
                </ContentDivM>
                {/*<ButtonMobile  onClick={() => navigate('login')} >*/}
                {/*    <span >Try Now!</span>*/}

                {/*</ButtonMobile>*/}
                <ButtonTryNow/>
            </MainContainerM>

        </GlobalDiv>


    )
}


export default WingsDonation
