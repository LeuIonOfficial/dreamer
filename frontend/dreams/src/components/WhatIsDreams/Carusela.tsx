import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import ButtonArrowRight from "../../assets/media/button_arrow_right.svg";
import ButtonArrowLeft from "../../assets/media/button_arrow_left.svg";


const Img = styled.img`
  width: inherit;
  @media only screen and (max-width: 800px) {
    flex: 1 1 auto;
    position: relative;
    width: 200px;
  }
`
const CardCarusela = styled.div `
  height: 327px;
  width: 600px;
  margin-left: 10px;

  @media (max-width: 800px){
    height: 270px;
    position: static!important;
    width: 200px;
  }`
const Slider = styled.div`
  width: inherit;
`
const ButtonLeft = styled.div`
  left: 0;
  top: 30%;
`
const ButtonRight = styled.div`
  right: 0;
  top: 30%;
`

const Img2 = styled.img`
  width: 10px;
  height: 18px;
`;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 800 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1,
        slidesToSlide: 1
    }

};



const CaruselaImageSrc = [
    {

        src: "./../../../../src/assets/images/firstCard.ac86345d2178d23452c6.png"
    },
    {
        src: " ./../../../../src/assets/images/secondCard.e5866588bec66cd88dda.png"
    },
    {
        src: " ./../../../../src/assets/images/thirdCard.92d0e865e2715196ba27.png"
    },

    {
        src: " ./../../../../src/assets/images/fourthCard.d1a4cb4a3c51570451e6.png"
    },

    {
        src: " ./../../../../src/assets/images/fiveCard.c415a5d53cd508a0858d.png"
    },


];

const ButtonGroup = ({ next, previous }: any) => {
    return (
        <div className="cursor-pointer">
            <ButtonLeft className="absolute" onClick={() => previous()}>
                <Img2 src={ButtonArrowLeft} alt="Your SVG" />
            </ButtonLeft>
            <ButtonRight className="absolute" onClick={() => next()}>
                <Img2 src={ButtonArrowRight} alt="Your SVG" />
            </ButtonRight>
        </div>

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
                        <Slider key={index}>
                            <Img src={image.src} alt="card"/>
                        </Slider>
                    );
                })
                }
            </Carousel>
        </CardCarusela>
    );
};
export default Carusela;



