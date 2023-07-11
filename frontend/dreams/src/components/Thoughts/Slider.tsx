import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ButtonArrowRight from "../../assets/media/button_arrow_right.svg";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ButtonArrowLeft from "../../assets/media/button_arrow_left.svg";

const Img = styled.img`
  width: inherit;
  @media only screen and (max-width: 800px) {
    flex: 1 1 auto;
    position: relative;
    width: 200px;
  }
`
const Img2 = styled.img`
  width: 10px;
  height: 18px;
`
const Card = styled.div`
  height: 470px;
  width: 350px;
  @media only screen and (max-width: 800px){
    height: 270px;
    position: static!important;
    width: 200px;
  }
  `
const SliderThoughts = styled.div`
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

const responsive = {
    desktop: {
        breakpoint: { max: 10000, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const sliderImageSrc = [
    {src: "../src/assets/media/design.1720f62b428df4deb300.png"},
    {src: "../src/assets/media/marketing.bc5622fa6d0e315376ce.png"},
    {src: "../src/assets/media/ceoFounder.cee090e894b0d8a58d9b.png"},
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

const Slider = () => {
    return (
        <Card>
            <Carousel
                arrows={false}
                responsive={responsive}
                infinite={true}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup/>}
            >
                {sliderImageSrc.map((image, index) => {
                    return (
                        <SliderThoughts key={index}>
                            <Img src={image.src} alt="card" />
                        </SliderThoughts>
                    );
                })
                }
            </Carousel>
        </Card>
    );
};
export default Slider;