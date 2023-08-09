import styled from "styled-components";

const Container = styled.div`
  max-width: 99%;
  padding: 0;
  margin: 20px 0 30px 0;
`
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 100%;
`
const ButtonLeft = styled.div`
  height: 50px;
  background-clip: content-box,border-box;
  background-image: linear-gradient(#fff,#fff),linear-gradient(150.93deg,#84fad5 1.02%,#ebbfff 44.33%,#f6ec85 76.07%)!important;
  background-origin: border-box;
  border: 1px double transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px 0 0 15px;
  width: 100%;
  margin: 0;
`
const ButtonRight = styled.div`
  height: 50px;
  background-clip: content-box,border-box;
  background-image: linear-gradient(#fff,#fff),linear-gradient(150.93deg,#84fad5 1.02%,#ebbfff 44.33%,#f6ec85 76.07%)!important;
  background-origin: border-box;
  border: 1px double transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius:0 15px 15px 0;
  width: 100%;
  margin: 0;
`
const ButtonSquare = styled.div`
  height: 50px;
  background-clip: content-box,border-box;
  background-image: linear-gradient(#fff,#fff),linear-gradient(150.93deg,#84fad5 1.02%,#ebbfff 44.33%,#f6ec85 76.07%)!important;
  background-origin: border-box;
  border: 1px double transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  width: 100%;
  margin: 0;
`
const Text = styled.span`
  color: #777d74;
`
export const ComponentSelector = () => {
    return (
        <Container>
            <ContentBox>
                <ButtonLeft>
                    <Text>About</Text>
                </ButtonLeft>
                <ButtonSquare>
                    <Text>My Dream</Text>
                </ButtonSquare>
                <ButtonSquare>
                    <Text>Fulfilled</Text>
                </ButtonSquare>
                <ButtonRight>
                    <Text>Received</Text>
                </ButtonRight>
            </ContentBox>
        </Container>
    )
}