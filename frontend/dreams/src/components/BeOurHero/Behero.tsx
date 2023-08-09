import styled from "styled-components";


const ContainerBeHero = styled.div`
  //display: flex;
  //align-items: flex-start;
  //justify-content: space-between;
  //flex-direction: column;
  height: 100%;
  @media (max-width: 800px) {
   
  }
`

const ContainerDescription = styled.div`
  //margin: 0 20px 0 0;
  padding: 0 18px 0 0;
  @media (max-width: 800px){
    //margin: 0 0 16px;
    //padding: 0 18px 0 0;
    padding: 0 0 15px 0;
  }
  
`

const TitleBeHero = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;
  color: #333333;
  margin: 0 0 70px;
  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 25px;
    margin: 0;
  }
`

const ContentBeHero = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 50px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0 0 50px;
  }
`

const TextDescription = styled.p`
  font-size: 28px;
  line-height: 36px;
  color: #060606;
  margin: 0 0 16px;
  font-weight: 400;
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    margin: 0;
  }
`

const TitleDescription = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #202020;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 19px;
    line-height: 41px;
    margin: 0;
  }
`

const Main = styled.div`
  display: block;
  box-sizing: border-box;
  height: 413px;
  padding: 60px 100px;
  border-bottom: 1px solid #d9e5e5;
  @media (max-width: 800px) {
    padding: 38px;
    height: 350px;
  }
`
const BeHero = () => {
    return (
        <Main>
            <ContainerBeHero>
                <TitleBeHero>Be our hero</TitleBeHero>
                <ContentBeHero>
                    <ContainerDescription>
                        <TitleDescription>Dreamer</TitleDescription>
                        <TextDescription>Dreamer is a person who gives for other dreams and receive back twice for it’s
                            own
                            dream.</TextDescription>
                    </ContainerDescription>
                    <ContainerDescription>
                        <TitleDescription>Dream Angel</TitleDescription>
                        <TextDescription>Dream Angel is a person who give to others and collect fulfilled dreams for his
                            future dream or further donation.</TextDescription>
                    </ContainerDescription>
                </ContentBeHero>
            </ContainerBeHero>
        </Main>
    )
}

export default BeHero
