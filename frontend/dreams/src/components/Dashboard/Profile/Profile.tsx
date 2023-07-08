import styled from 'styled-components'

const MainConatiner = styled.div`
  box-sizing: border-box;
padding: 0;
  margin-top: 10px;
`
const ProfileConatiner = styled.div`
  left: 0;
  position: sticky;
  top: 73px;
`
const ContainerElements = styled.div`
  box-shadow: 0 33px 20px rgba(0, 0, 0, .06), 0 7.371px 4.467px rgba(0, 0, 0, .01), 0 2.195px 1.33px rgba(0, 0, 0, .01);
  margin: 0px 10px 16px 10px;
  border-radius: 10px ;
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
`
const ProfileImageContainer = styled.div`
    
`
const ProfileImage = styled.a`
border-radius: 50%;
  border: 2px solid white;
  height: 95px;
  line-height: 95px;
  width: 95px;
  background-color: rgba(var(255,255,255), var(1));
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
const Profile = () =>{
    return(
        <MainConatiner>
            <ProfileConatiner>
                <ContainerElements>
                    <ProfileImgSection />
                    <ProfileImageContainer>
                        <ProfileImage >
                            <Image src="./../../../../src/assets/wing/bdf2ff7d7efad75f528b71565ad82efb.jpg">
                            </Image>
                        </ProfileImage>
                    </ProfileImageContainer>
                </ContainerElements>

            </ProfileConatiner>

        </MainConatiner>

    )
}
export default Profile
