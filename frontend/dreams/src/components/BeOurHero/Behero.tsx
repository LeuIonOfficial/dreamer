import styled from "styled-components";


const ContainerBeHero = styled.div`
  border-bottom: 1px solid #98dfda;
  height: 413px;
  padding: 60px 100px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  @media only screen and (width <= 800px) {
    display: none;
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
`

const ContentBeHero = styled.div`
  display: flex;
  flex-direction: row;
  font-family: monospace;
  margin: 10px 30px;
`

const TextDescription = styled.p`
  font-size: 28px;
  line-height: 36px;
`

const TitleDescription = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
`
const ContainerBeHeroMob = styled.div`
  height: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (width > 801px ) {
    display: none;
  }
`
const TitleBeHeroMob = styled.h1`
  width: 75%;
  font-size: 32px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  margin: 20px 30px;
`
const ContainerDescriptionMob = styled.div`
  margin-right: 10px;
`
const TitleDescriptionMob = styled.h3`
  font-size: 22px;
  font-weight: 700;
  line-height: 34px;
`
const TextDescriptionMob = styled.p`
  font-size: 11px;
  line-height: 16px;
  //text-align: center;
  margin: 0;
`

const BeHero = () => {
    return (
        <div>
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

            <ContainerBeHeroMob>
                <TitleBeHeroMob>Be our hero</TitleBeHeroMob>
                <ContentBeHero>
                    <ContainerDescriptionMob>
                        <TitleDescriptionMob>Dreamer</TitleDescriptionMob>
                        <TextDescriptionMob>Dreamer is a person who gives for other dreams and receive back twice for
                            it’s own
                            dream.</TextDescriptionMob>
                    </ContainerDescriptionMob>
                    <ContainerDescriptionMob>
                        <TitleDescriptionMob>Dream Angel</TitleDescriptionMob>
                        <TextDescriptionMob>Dream Angel is a person who give to others and collect fulfilled dreams for
                            his
                            future dream or further donation.</TextDescriptionMob>
                    </ContainerDescriptionMob>
                </ContentBeHero>
            </ContainerBeHeroMob>
        </div>
    )
}

export default BeHero
