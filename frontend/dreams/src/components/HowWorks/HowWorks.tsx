import styled from 'styled-components'

const ContainerHowWorks = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 35px;
  margin-top: 20px;
`
const SpanHowWorks = styled.span`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
`
const PaddingHowWorks = styled.div`
  margin: 0 330px 0 136px;
  @media (max-width: 900px) {
   margin: 0 30px 0 20px;
  }
`
const HowWorksTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`
const DivBottom = styled.div`
margin-bottom: 10px;
`
const HowWorksDescription = styled.ul`
  color: #535353;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 20px;
  margin-top: 0;
  padding-left: 32px;
  list-style-type: disc;
`
const HowWorks = () => {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <ContainerHowWorks className='flex justify-center items-center '>
                <SpanHowWorks>How it works</SpanHowWorks>
            </ContainerHowWorks>
            <PaddingHowWorks className='flex flex-col'>
                <HowWorksTitle>Beiing a Dreamer</HowWorksTitle>
            <DivBottom>
                <HowWorksDescription>
                    <li>The first step is to Register.</li>
                    <li>Set up your personal information that is required and add your profile photos.</li>
                    <li>Choose one of the subscription packages.</li>
                    <li>Set your dream description, amount and add photos of your dream.</li>
                    <li>Start your dream fulfilment campaign.</li>
                    <li>Start Fulfilling other dreams by sharing 1 $tar for a dream.</li>
                    <li>Collect fulfilled dreams to get the option to double the amount for your dream.</li>
                    <li>To fulfill and cash out your dream you have to fulfil half of the dreams you’ve set.</li>
                </HowWorksDescription>
            </DivBottom>
            </PaddingHowWorks>
            <PaddingHowWorks>
                <HowWorksTitle>Beiing a Dream Angel</HowWorksTitle>
                <div>
                    <HowWorksDescription>
                        <li>The first step is to Register.</li>
                        <li>Set up your personal information required and add your profile photos.</li>
                        <li>Choose one of the subscription packages.</li>
                        <li>Start Fulfilling other's dreams sharing 1 $tar for a dream, collect fulfilled dreams.</li>
                    </HowWorksDescription>
                </div>
            </PaddingHowWorks>
        </div>
    )
}
export default HowWorks