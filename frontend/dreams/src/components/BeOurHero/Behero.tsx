import styled from "styled-components";


const ContainerBeHero = styled.div`
  border-bottom: 1px solid #98dfda;
  height: 413px;
  padding: 60px 100px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  @media (max-width: 800px) {
    height: 320px;
    border-bottom: 1px solid #98dfda;
    padding: 15px;
  }
`

const ContainerDescription = styled.div`
  margin-right: 10px;
`

const TitleBeHero = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;
  margin: 20px 30px;
  color: #333;
  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 25px;
    margin: 0;
  }
`

const ContentBeHero = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 30px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`

const TextDescription = styled.p`
  font-size: 28px;
  line-height: 36px;
  color: #060606;
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
  @media (max-width: 800px) {
    font-size: 19px;
    line-height: 41px;
    margin: 0;
  }
`
const BeHero = () => {
    return (
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
    )
}

export default BeHero
