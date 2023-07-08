import Slider from "./Slider";
import { useMediaQuery } from 'react-responsive'
import styled from "styled-components";
// @ts-ignore
import OurTeam from "../../assets/media/ourteam.svg";

/*npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch*/


const Div1 = styled.div`
  height: 700px;
  padding: 100px;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 768px){
    height: auto;  
    padding: 10px;
    flex-direction: column;
  }
`
const Div2 = styled.div`
  width: 400px;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 768px){
    display:flex;
    width: 95%;
  }
`
const Div3 = styled.div`
  width: 50%;
  height: 75%;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
  @media only screen and (max-width: 768px){
    align-items: center;
    width: 95%;
    margin-left: 0;
  }
`
const Img = styled.img`
  width: 140px;
  height: 80px;
`
const H2 = styled.h2`
  font-family: Space Grotesk,serif;
  color: #333;
  font-size: 64px;
  font-weight: 700;
  line-height: 65px;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px){
    font-size: 26px;
    font-weight: 700;
    line-height: 34px;
    text-align: center;
  }
`
const P = styled.p`
  font-family: Space Grotesk,serif;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  color: rgba(33,37,41);
  margin: 0;
  @media only screen and (max-width: 768px){
    font-size: 14px;
    line-height: 19px;
    text-align: center;
  }
`

const Thoughts = () => {
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 769 })
        return isNotMobile ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 768 })
        return isMobile ? children : null
    }

    return (
            <Div1 className="flex">
                <Mobile>
                <Img src={OurTeam} alt="Your SVG" />
                <H2>Thoughts</H2>
                <Div2 className="flex relative">
                    <Slider/>
                </Div2>
                <Div3 className="flex">
                    <P>We believe that this platform will change the way of thinking and everyone will help each other reaching their dreams and making this world better !</P></Div3>
            </Mobile>

                <Default>
                    <Div2 className="flex relative">
                        <Slider/>
                    </Div2>
                    <Div3 className="flex">
                        <Img src={OurTeam} alt="Your SVG" />
                        <H2>Thoughts</H2>
                        <P>We believe that this platform will change the way of thinking and everyone will help each other reaching their dreams and making this world better !</P></Div3>
                </Default>
            </Div1>

    )
}

export default Thoughts

