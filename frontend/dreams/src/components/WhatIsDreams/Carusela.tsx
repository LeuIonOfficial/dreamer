import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import ButtonArrowRight from "../../assets/media/button_arrow_right.svg";
import ButtonArrowLeft from "../../assets/media/button_arrow_left.svg";


const Img = styled.img`
  width: inherit;
  @media only screen and (max-width: 1000px) {
    flex: 1 1 auto;
    position: relative;
    width: 200px;
  }
`
const CardCarusela = styled.div `
  height: 600px;
  width: 600px;

  @media (max-width: 1000px){
    //height: 400px;
    //width: 400px;
    height: 270px;
    position: static!important;
    width: 200px;
  }
  

`;
const ButtonLeft = styled.div`
  position: absolute;
  //left: 20px;
  margin-left: -15px;
  margin-top: -150px;
  
`
const ButtonRight = styled.div`
  position: absolute;
  margin-top: -150px;
  margin-left: 602px;
  
  @media (max-width: 1000px){
    margin-left: 201px;
    margin-top: -148px;
    position: absolute;
  }
`
const CursorPointer = styled.div `
  cursor: pointer;
`;
const Img2 = styled.img`
  width: 10px;
  height: 18px;
`;
// const CarouselBtnleft = styled.div `
//   margin-left: -10px;
//   margin-top: 0;
//   position: absolute;
//
//   @media screen and (max-width: 1000px) {
//     margin-left: -7px;
//     margin-top: -170px;
//     width: 10px;
//     height: 18px;
//   }

//
// const CarouselBtnRight = styled.div `
//   margin-left: 602px;
//   margin-top: -152px;
//
//   @media screen and (max-width: 1000px) {
//     margin-left: 195px;
//     margin-top: -170px;
//     position: absolute;
//     width: 10px;
//     height: 18px;
//   }
//
// `;


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 900 },
        items: 3,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 900, min: 0 },
        items: 1,
        slidesToSlide: 1
    }

};



const CaruselaImageSrc = [
    {

        src: " ./../../../../src/assets/images/2.JPG"
    },
    {
        src: " ./../../../../src/assets/images/3.JPG"
    },
    {
        src: " ./../../../../src/assets/images/4.JPG"
    },

    {
        src: " ./../../../../src/assets/images/5.JPG"
    },

    {
        src: " ./../../../../src/assets/images/6.JPG"
    },


];

const ButtonGroup = ({ next, previous }: any) => {
    return (
        <CursorPointer>
            <ButtonLeft className="absolute" onClick={() => previous()}>
                <Img2 src={ButtonArrowLeft} alt="Your SVG" />
            </ButtonLeft>
            <ButtonRight className="absolute" onClick={() => next()}>
                <Img2 src={ButtonArrowRight} alt="Your SVG" />
            </ButtonRight>
            {/*<CarouselBtnleft onClick={() => previous()}>*/}
            {/*    <svg  xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path d="M9.79922 14.7968L3.79922 8.79678L9.79922 2.79678L8.59922 0.396776L0.199219 8.79678L8.59922 17.1968L9.79922 14.7968Z" fill="#6C6C6C"></path>*/}
            {/*    </svg>*/}
            {/*</CarouselBtnleft>*/}

            {/*<CarouselBtnRight onClick={() => next()}>*/}
            {/*    <svg  xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path d="M0.20078 2.796L6.20078 8.796L0.20078 14.796L1.40078 17.196L9.80078 8.796L1.40078 0.395996L0.20078 2.796Z" fill="#6C6C6C"></path>*/}
            {/*    </svg>*/}
            {/*</CarouselBtnRight>*/}
        </CursorPointer>

    );
}

const Carusela = () => {
    return (
        <CardCarusela>
            <Carousel
                arrows={false}
                responsive={responsive}
                infinite={true}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup/>}
            >
                {CaruselaImageSrc.map((image, index) => {
                    return (
                        <div className="slider" key={index}>
                            <Img src={image.src} alt="card" />
                        </div>
                    );
                })
                }
            </Carousel>
        </CardCarusela>
    );
};
export default Carusela;

