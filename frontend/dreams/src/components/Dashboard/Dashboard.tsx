import styled from 'styled-components'
import Profile from "./Profile/Profile";

const ContainerPage = styled.div`
  background-color: rgb(254, 253, 253);
  min-height: 100vh;
  box-sizing: border-box;
  display: block;
`
const ContentConatiner = styled.div`

`
const Dashboard = () => {
    return (
        <ContainerPage>
            <ContentConatiner>
                <Profile />

            </ContentConatiner>


        </ContainerPage>

    )
}
export default Dashboard
