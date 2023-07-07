import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



const GlobalDiv = styled.div`
  box-sizing: border-box;
  font-family: 'Space Grotesk';
`
const MainBox = styled.div`
  height: 631px;
  padding: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (width <= 600px){
    display: none;
  }
`
const DonationImage = styled.img`
  width: 494px;
  height: 286px;
`
const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 20px;
  & h2{
    color: #333;
    font-size: 64px;
    font-weight: 700;
    line-height: 65px;
  }
  & p{
    color: #333;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    margin-bottom: 16px;
    margin-top: 0;
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
  height: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (width > 601px ){
    display: none;
  }
`
const DonationImageM = styled.img`
  width: 252px;
  height: 146px;
`
const ContentDivM = styled.div`
  width: 75%;
  & h2{
    color: #333;
    font-size: 26px;
    font-weight: 700;
    line-height: 34px;
    text-align: center;
  }
  & p{
    color: #2c2c2c;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    margin: 0;
  }
`
const ButtonMobile =styled.div`
  background: linear-gradient(297.06deg,#f8ed84 23.88%,#f5e0ff 66.2%,#84fad5 109.31%);
  border-radius: 43px;  
  height: 48px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  & span{
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

            <MainBox >
                <DonationImage src="./../../../../src/assets/wing/WingsImage.1e6f79f5963bda8647a3.png" alt="WingDonation"/>
                <ContentContainer>
                    <h2 >Wings Donations</h2>
                    <p>Wings donations are campaignes organized by Dreamerz with the aim of
                        charity,
                        helping people all over the world.</p>
                    <Button onClick={() => navigate('login')} >
                        <span >Try Now!</span>
                    </Button>
                </ContentContainer>
            </MainBox>

            <MainContainerM>
                <DonationImageM src="./../../../../src/assets/wing/WingsImage.1e6f79f5963bda8647a3.png" alt="Wings"/>
                <ContentDivM >
                    <h2 >Wings Donation</h2>
                    <p>Wings donations are campaignes organized by Dreamerz with the aim of charity, helping people all over the world.</p>
                </ContentDivM>
                <ButtonMobile  onClick={() => navigate('login')} >
                    <span >Try Now!</span>

                </ButtonMobile>

            </MainContainerM>

        </GlobalDiv>


    )
}


export default WingsDonation