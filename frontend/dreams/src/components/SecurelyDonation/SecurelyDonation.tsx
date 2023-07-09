import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const GlobalDiv = styled.div`
  box-sizing: border-box;
  font-family: 'Space Grotesk';
`
const ContainerDiv = styled.div`
  height: 710px;
  background-image: url("./../../../../src/assets/wing/Background5.67805aabb7dd9a06b946.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (width <= 600px ) {
    display: none;
  }

`
const ConatinerText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const ContainerTextComponents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const DonationPeopleImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TextHolderConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  & p{
    font-size: 24px;
    color: whitesmoke;
    font-weight: 700;
    line-height: 31px;
    width: 75%;
  }
  
`
const TitleHolderbox = styled.div`
  display: flex;
  align-items: center;
  
 
  & h3{
    font-size: 64px;
        font-weight: 700;
        line-height: 65px;
        color: whitesmoke;
        margin-bottom: 0;
        margin-top: 0;
  }
  
`
const ImageSecqure = styled.img`
    margin-right: 10px;
    height: 64px;
`
const ImagePeople = styled.img`
  width: 165px;
  vertical-align: middle;
`
const ImageSocialMedia  = styled.img`
  width: 550px;
  height: 550px;
`
const GlobalDivM = styled.div`
  height: 710px;
  background: url("./../../../../src/assets/wing/SecyrelyDonation.ea03cf5a48683e3490c2.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
  @media only screen and (width > 601px ){
      display: none;
    }
`
const TopTitleContainerM = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CircleM = styled.img`
  width: 64px;
  height: 30px;
  margin-left: 20px;
`
const TitleContainerM = styled.div`
  display: flex;
& img{
  vertical-align: middle;
  margin-right: 10px;
  
}
  & h3{
    margin-right: 10px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    white-space: normal;
    text-align: right;
    margin-right: 10px;
  }
`
const MobileParagraf = styled.p`
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  text-transform: full-width;
  width: 75%;
  margin: 0 0 16px 20px;
`
const ImageContainerM = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  & img{
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
`
const ButtonMobile =styled.div`
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
const SecurelyDonation = () => {
    const navigate = useNavigate()


    return (
        <GlobalDiv>
            <ContainerDiv >
                <ConatinerText >
                    <ContainerTextComponents >
                        <DonationPeopleImg >
                            <TextHolderConatiner>
                                <TitleHolderbox>
                                    <ImageSecqure src="./../../../../src/assets/wing/secyrely.7d02b37f3a5dfe54a9285f490e74411e.svg"
                                         alt="screen"/>
                                    <h3>Securely Donation</h3>
                                </TitleHolderbox>
                                <p >
                                    All the donations will be saved in your Profile History Fulfilled – Peoples Dreams
                                    that
                                    you have donated to Received – Donations that you have received from People
                                </p>
                            </TextHolderConatiner>
                            <ImagePeople src="./../../../../src/assets/wing/People.372031c702e82c76a061105c055b7f4e.svg" alt=""/>
                        </DonationPeopleImg>
                    </ContainerTextComponents>
                </ConatinerText>
                <ImageSocialMedia src="./../../../../src/assets/wing/screen.80f182283b766496e40e.png" alt="screen" />
            </ContainerDiv>

            <GlobalDivM >
                <TopTitleContainerM>
                    <CircleM src="./../../../../src/assets/wing/People.372031c702e82c76a061105c055b7f4e.svg" alt="people" />
                    <TitleContainerM>
                        <img src="./../../../../src/assets/wing/secyrely.7d02b37f3a5dfe54a9285f490e74411e.svg" alt="security"/>
                        <h3 >Securely Donation</h3>
                    </TitleContainerM>
                </TopTitleContainerM>
                <MobileParagraf>
                    All the donations will be saved in your Profile History
                    <br/>
                    Fulfilled – Peoples Dreams that you have donated to
                    <br/>
                    Received – Donations that you have received from People
                </MobileParagraf>
                <ImageContainerM >
                    <img src="./../../../../src/assets/wing/screen.80f182283b766496e40e.png" alt="screen" />
                </ImageContainerM>
                <ButtonMobile onClick={() => navigate('login')} >
                    <span>Try Now!</span>
                </ButtonMobile>

            </GlobalDivM>
        </GlobalDiv>


    )
}

export default SecurelyDonation
