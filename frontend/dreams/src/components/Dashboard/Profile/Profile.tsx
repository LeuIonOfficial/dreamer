import styled from 'styled-components'
import {useState} from "react";

const MainConatiner = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin-top: 10px;
  font-family: Space Grotesk, serif;
`
const ProfileConatiner = styled.div`
  left: 0;
  position: sticky;
  top: 73px;
  @media only screen and (width <= 995px ) {
    position: sticky;
  }

`
const ContainerElements = styled.div`
  box-shadow: 0 33px 20px rgba(0, 0, 0, .06), 0 7.371px 4.467px rgba(0, 0, 0, .01), 0 2.195px 1.33px rgba(0, 0, 0, .01);
  margin: 0 10px 16px 10px;
  border-radius: 10px;
`
const ProfileImgSection = styled.div`
  background-image: url("./../../../../src/assets/wing/91a27566dd0ca2ffc2b9340fbe4249e1.jpg");
  background-size: cover;
  border-radius: 10px 10px 0 0;
  height: 124px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (width <= 995px ) {
    padding-right: 0;
    text-align: center;
  }
`
const ProfileImageContainer = styled.div`

`
const ProfileImage = styled.a`
  border-radius: 50%;
  border: 1px solid white;
  background-color: #fff;
  height: 95px;
  line-height: 95px;
  width: 95px;
  background-color: rgba(var(255, 255, 255), var(1));
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
const Image = styled.img`
  border-radius: 50rem;
  object-fit: cover;
  height: 90px;
  line-height: 90px;
  width: 90px;
  vertical-align: middle;
`
const TextContent = styled.div`
  text-align: center;
  padding: 10px;
`
const H6 = styled.h6`
  cursor: pointer;
  color: rgb(33, 37, 41);
  font-size: 0.875rem
`
const ParagrafConatiner = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`
const Paragraf = styled.div`
  font-size: 14px;
  color: rgb(79, 79, 79);
  line-height: 1;
  font-weight: 700;
  margin: 0;
  width: 75%;

`
const Scope = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px 10px;
`
const ScopeSpan = styled.div`
  font-size: 13px;
  color: rgba(33, 37, 41);

`
const ScopeProcentage = styled.div`
  font-size: 12px;
  color: black;
  font-weight: bolder;
`
const ProgressBar = styled.div`
  height: 16px;
  background-color: #e9ecef;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px 0 10px;
  display: flex;
  overflow: hidden;
 &:hover{
  border: 1px solid gray;
 }
`
const Bar = styled.div`
  cursor: pointer;
  background: linear-gradient(114.93deg, #84fad5 1.02%, #ebbfff 44.33%, #f6ec85 76.07%);
  width: 13%;
  
`
const RecivedDonation = styled.div`
  font-size: 12px;
  color: rgb(33, 37, 41);
  margin: 5px 10px 15px 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`
const WingsDonationSection = styled.div`
  color: rgb(33, 37, 41);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5px 0 10px;

  & span {
    font-weight: 700;
    color: rgb(79, 79, 79);
  }

  & p {
    cursor: pointer;
    margin: 0 10px 16px 0;

    & :hover {
      font-weight: 900;
    }

    & u {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 820px) {
    display: none;
  }

`

const ButtonComponents = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  @media only screen and (width >= 820px ) {
    display: flex;
    justify-content: space-around;

  }
  @media only screen and (width >= 820px ){
    display: none;
    
  }
`
const ButtonMobile = styled.div`
  align-items: center;
  background: ${color => color.$backColor ? "linear-gradient(320deg,#f8ed84 23.88%,#f5e0ff 66.2%,#84fad5 109.31%) " : "linear-gradient(#fff, #fff), linear-gradient(160deg, #84fad5 20%, #ebbfff 37%, #f6ec85 53%)"};
  background-clip: content-box, border-box;
  font-weight: ${(props) => (props.$font ? 700 : 400)};
  background-origin: border-box;
  border: 1px double transparent;
  border-radius: 10px;
  color: #000;
  cursor: pointer;
  font-size: 12px;
  height: 48px;
  width: 110px;
  display: flex;
  justify-content: center;

`

const Profile = () => {
    //bt1
    const [isFontActive, setIsFontActive] = useState(false)
    const [isBackColorActive, setIsBackColorActive] = useState(false)
    //bt2
    const [isFontActive1, setIsFontActive1] = useState(false)
    const [isBackColorActive1, setIsBackColorActive1] = useState(false)
    //
    const [isFontActive2, setIsFontActive2] = useState(false)
    const [isBackColorActive2, setIsBackColorActive2] = useState(false)
    return (
        <MainConatiner>
            <ProfileConatiner>
                <ContainerElements>
                    {/*Image part of cpmponent*/}
                    <ProfileImgSection>
                        <ProfileImageContainer>
                            <ProfileImage>
                                <Image src="./../../../../src/assets/wing/bdf2ff7d7efad75f528b71565ad82efb.jpg">
                                </Image>
                            </ProfileImage>

                        </ProfileImageContainer>
                    </ProfileImgSection>
                    {/*Text part of component*/}
                    <TextContent>
                        <H6>
                            Robert St.
                        </H6>
                        <ParagrafConatiner>
                            <Paragraf>
                                I would love to have a new HUBLOT watches !
                            </Paragraf>
                        </ParagrafConatiner>
                    </TextContent>
                    {/*Scope*/}
                    <div>
                        <Scope>
                            <ScopeSpan>Scope</ScopeSpan>
                            <ScopeProcentage>13%</ScopeProcentage>

                        </Scope>
                        <ProgressBar>
                            <Bar ></Bar>

                        </ProgressBar>
                        <RecivedDonation>
                            <span>Recived : 9</span>
                            <span>Fulfilled : 10</span>
                        </RecivedDonation>


                    </div>

                </ContainerElements>
                {/*Button Components*/}
                <ButtonComponents>
                    <ButtonMobile $font={isFontActive} $backColor={isBackColorActive} onClick={() => {setIsFontActive(!isFontActive); setIsBackColorActive(!isBackColorActive);}}>Wing donations</ButtonMobile>
                    <ButtonMobile $font={isFontActive1} $backColor={isBackColorActive1} onClick={() => {setIsFontActive1(!isFontActive1); setIsBackColorActive1(!isBackColorActive1);}}>Dreams</ButtonMobile>
                    <ButtonMobile $font={isFontActive2} $backColor={isBackColorActive2} onClick={() => {setIsFontActive2(!isFontActive2); setIsBackColorActive2(!isBackColorActive2);}}>Last fulfilled</ButtonMobile>

                </ButtonComponents>

                {/*WingsDonation Componenet*/}
                <WingsDonationSection>
                    <span>Wings Donation</span>
                    <p>
                        <u>See All</u>
                    </p>


                </WingsDonationSection>
            </ProfileConatiner>

        </MainConatiner>

    )
}
export default Profile
