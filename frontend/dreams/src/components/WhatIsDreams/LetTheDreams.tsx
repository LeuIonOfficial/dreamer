import Carusela from "./Carusela";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import NewDream from '../../assets/images/newDream.svg'
import { useMediaQuery } from 'react-responsive'
import Slider from "../Thoughts/Slider";
import ButtonTryNow from "../ButtonTryNow/ButtonTryNow";
//
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
//
//
// // const LetDreamsContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: space-around;
// //   padding: 10px;
// //   font-family: "Space Grotesk", sans-serif;
// //
// //   @media screen and (max-width: 1000px) {
// //     padding: 18px;
// //   }
// // `;
// //
// // const LetDreamsHeading = styled.h1`
// //   color: #333;
// //   font-size: 54px;
// //   text-align: center;
// //   margin-top: 150px;
// //
// //   @media screen and (max-width: 1000px) {
// //     font-size: 24px;
// //     margin-top: 0;
// //   }
// // `;
// //
// // const SVGContainer = styled.svg`
// //   position: absolute;
// //   top: 430px;
// //
// //   @media screen and (max-width: 1000px) {
// //     position: relative;
// //     top: unset;
// //     margin-top: 15px;
// //   }
// // `;
// //
// // const CaruselaContainer = styled.div`
// //   margin-top: 200px;
// //
// //   @media screen and (max-width: 1000px) {
// //     margin-top: 50px;
// //     width: 100%;
// //     max-width: 280px;
// //     height: 450px;
// //   }
// // `;
// //
// // const Button = styled.button`
// //   border-radius: 43px;
// //   height: 72px;
// //   width: 350px;
// //   position: absolute;
// //   top: 1000px;
// //   left: 50%;
// //   transform: translateX(-50%);
// //   background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
// //
// //   @media screen and (max-width: 1000px) {
// //     height: 48px;
// //     width: 100%;
// //     position: relative;
// //     top: unset;
// //     left: unset;
// //     transform: unset;
// //     //margin-top: 90px;
// //   }
// //
// //   &:hover {
// //     font-size: 21px;
// //   }
// // `;
//
// const LetDreamsContainer = styled.div`
//   background: radial-gradient(174.02% 541.72% at 249.87% 36.87%,rgba(164,255,226,.5) 0,#fff 100%);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   height: 788px;
//   padding: 64px;
//   font-family: 'Space Grotesk', sans-serif;
//
//   @media screen and (max-width: 1000px) {
//     padding: 18px;
//   }
//
// `;
//
// const LetDreamsHeading = styled.h1`
//   color: #333;
//   font-size: 64px;
//   font-weight: 700;
//   line-height: 65px;
//   text-align: center;
//   margin-bottom: 50px;
//   //margin-top: 150px;
//
//   @media screen and (max-width: 1000px) {
//     font-size: 24px;
//     margin-top: 0;
//   }
//
// `;
//
// // const SVGContainer = styled.svg`
// //   position: absolute;
// //   top: 288px;
// //   //width: 10px;
// //   //height: 18px;
// //
// //   @media screen and (max-width: 1000px) {
// //     position: relative;
// //     top: unset;
// //     margin-top: 15px;
// //     height: 65px;
// //   }
// // `;
//
// const CaruselaContainer = styled.div`
//   //margin-top: 200px;
//   display: flex;
//   align-items: center;
//   overflow: hidden;
//   position: relative;
//   height: 100%;
//   width: 625px;
//   //margin-top: 3.75rem;
//
//
//   @media screen and (max-width: 1000px) {
//     margin-top: 0;
//     width: 100%;
//     max-width: 280px;
//     height: 350px;
//     display: flex;
//     justify-content: center;
//   }
//
// `;
//
// const Button = styled.button`
//
//   border-radius: 43px;
//   height: 72px;
//   width: 350px;
//   position: absolute;
//   top: 673px;
//   left: 54%;
//   margin-top: 100px;
//   transform: translate(-60%);
//   background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
//
//   @media screen and (max-width: 1000px) {
//     height: 48px;
//     width: 100%;
//     position: relative;
//     top: unset;
//     left: unset;
//     transform: unset;
//     margin-top: -30px;
//   }
//
//   &:hover{
//     font-size: 21px;
//   }
//
// `;
// const Img = styled.img`
//   width: 242px;
//   height: 53px;
//   vertical-align: middle;
//   fill: none;
//   @media only screen and (max-width: 800px){
//     width: 106px;
//     height: 32px;
//   }
// `;
//
//
// const LetDreamerz: React.FC = () => {
//
//     const navigate = useNavigate();
//
//     const redirectionareSignUp = ()=> {
//         navigate("/signup")
//     }
//     return (
//         <LetDreamsContainer>
//             <LetDreamsHeading>Let the Dreams be your Wings</LetDreamsHeading>
//             <Img src={NewDream} alt="Your SVG" />
//             <CaruselaContainer>
//                 <Carusela />
//
//             </CaruselaContainer>
//
//             <Button onClick={redirectionareSignUp}>Try now</Button>
//         </LetDreamsContainer>
//     );
// };
//
// export default LetDreamerz;
//
// import Carusela from "./Carusela";
// import { useNavigate } from 'react-router-dom';
// import styled from "styled-components";
// import NewDream from '../../assets/images/newDream.svg'
// import { useMediaQuery } from 'react-responsive'
// import Slider from "../Thoughts/Slider";
// import ButtonTryNow from "../ButtonTryNow/ButtonTryNow";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


// const LetDreamsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   padding: 10px;
//   font-family: "Space Grotesk", sans-serif;
//
//   @media screen and (max-width: 1000px) {
//     padding: 18px;
//   }
// `;
//
// const LetDreamsHeading = styled.h1`
//   color: #333;
//   font-size: 54px;
//   text-align: center;
//   margin-top: 150px;
//
//   @media screen and (max-width: 1000px) {
//     font-size: 24px;
//     margin-top: 0;
//   }
// `;
//
// const SVGContainer = styled.svg`
//   position: absolute;
//   top: 430px;
//
//   @media screen and (max-width: 1000px) {
//     position: relative;
//     top: unset;
//     margin-top: 15px;
//   }
// `;
//
// const CaruselaContainer = styled.div`
//   margin-top: 200px;
//
//   @media screen and (max-width: 1000px) {
//     margin-top: 50px;
//     width: 100%;
//     max-width: 280px;
//     height: 450px;
//   }
// `;
//
// const Button = styled.button`
//   border-radius: 43px;
//   height: 72px;
//   width: 350px;
//   position: absolute;
//   top: 1000px;
//   left: 50%;
//   transform: translateX(-50%);
//   background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
//
//   @media screen and (max-width: 1000px) {
//     height: 48px;
//     width: 100%;
//     position: relative;
//     top: unset;
//     left: unset;
//     transform: unset;
//     //margin-top: 90px;
//   }
//
//   &:hover {
//     font-size: 21px;
//   }
// `;

const LetDreamsContainer = styled.div`
  background: radial-gradient(174.02% 541.72% at 249.87% 36.87%,rgba(164,255,226,.5) 0,#fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 788px;
  padding: 64px;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 800px) {
    padding: 0;
    height: 580px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }

`;

const LetDreamsHeading = styled.h1`
  color: #333;
  font-size: 64px;
  font-weight: 400;
  line-height: 65px;
  text-align: center;
  margin-bottom: 50px;
  //margin-top: 150px;

  @media screen and (max-width: 508px) {
    font-size: 34px;
    margin-top: -25px;
    line-height: 43px;
    //font-weight: 600;
    padding: 10px;
    height: 30px;
  }
  @media screen and (min-width: 509px) and (max-width: 800px){
    font-size: 52px;
    line-height: 64px;
    //font-weight: 600;
  }
`;

// const SVGContainer = styled.svg`
//   position: absolute;
//   top: 288px;
//   //width: 10px;
//   //height: 18px;
//
//   @media screen and (max-width: 1000px) {
//     position: relative;
//     top: unset;
//     margin-top: 15px;
//     height: 65px;
//   }
// `;

const CaruselaContainer = styled.div`
  //margin-top: 200px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 625px;
  //margin-top: 3.75rem;
  

  @media screen and (max-width: 800px) {
    margin-top: -35px;
    width: 100%;
    max-width: 280px;
    height: 255px;
    display: flex;
    justify-content: center;
  }

`;

const Button = styled.button`

  border-radius: 43px;
  height: 72px;
  width: 350px;
  position: absolute;
  top: 673px;
  left: 54%;
  margin-top: 100px;
  transform: translate(-60%);
  background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);

  @media screen and (max-width: 800px) {
    height: 48px;
    width: 90%;
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    margin-top: -30px;
  }

  &:hover{
    font-size: 21px;
  }

`;
const Img = styled.img`
  width: 242px;
  height: 53px;
  vertical-align: middle;
  fill: none;
  @media only screen and (max-width: 508px){
    width: 154px;
    height: 32px;
    margin-top: -40px;
  }
  @media screen and (min-width: 509px) and (max-width: 800px){
    margin-top: -78px;
    height: 32px;

  }
`;


const LetDreamerz: React.FC = () => {

    const navigate = useNavigate();

    const redirectionareSignUp = ()=> {
        navigate("/signup")
    }
    return (
        <LetDreamsContainer>
            <LetDreamsHeading>Let the Dreams be Your Wings</LetDreamsHeading>
            <Img src={NewDream} alt="Your SVG" />
            <CaruselaContainer>
                <Carusela />

            </CaruselaContainer>

            <Button onClick={redirectionareSignUp}>Try now</Button>
        </LetDreamsContainer>
    );
};

export default LetDreamerz;

