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
  top: 40%;
`
const ButtonRight = styled.div`
  right: 0;
  top: 40%;
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
                            <Img src={image.src} alt="card" />
                        </Slider>
                    );
                })
                }
            </Carousel>
        </CardCarusela>
    );
};
export default Carusela;


