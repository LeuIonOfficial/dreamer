import styled from 'styled-components'

const ContainerAboutUs = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 35px;
  margin-top: 20px;
`

const SpanAboutUs = styled.span`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
`
const PaddingAboutUs = styled.div`
  height: 100vh;
  margin: 0 330px 0 136px;
  @media (max-width: 900px) {
   margin: 0 30px 0 20px;
  }
  
`
const AboutUsTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

`
const AboutUsDescription = styled.div`
  color: #535353;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 20px;
`
const AboutUs = () => {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <ContainerAboutUs className='flex justify-center items-center '>
                <SpanAboutUs>About Us</SpanAboutUs>
            </ContainerAboutUs>
            <PaddingAboutUs className='flex flex-col'>
                <AboutUsTitle>We are Dreamerz</AboutUsTitle>
                <div>
                    <AboutUsDescription>
                        The most important thing in our life is to dream and then realize all the dreams we have. When
                        there is a dream, there is hope, there is life. Together we can create a world that has never
                        existed before. A world that you have been longing for, and one that will pave the way for a
                        brighter future. Imagine a world full of happiness where dreams come true, where you share and
                        receive back twice that you shared. Together, we will have a much better chance of improving
                        your performance and fulfilling each other’s dreams by sharing only one $tar (dollar) for a
                        dream. The good news is that it is never too late to start on a journey to turn your dream into
                        a reality.
                    </AboutUsDescription>
                </div>
                <AboutUsDescription>
                    This idea also came from a dream, so now we try to help others live better, fulfil their dreams,
                    trying to change the whole world, so lets make it happen. Dream ON!
                </AboutUsDescription>

                <AboutUsDescription>
                    'Let The Dreams be your Wings'.
                </AboutUsDescription>
            </PaddingAboutUs>
        </div>
    )
}
export default AboutUs