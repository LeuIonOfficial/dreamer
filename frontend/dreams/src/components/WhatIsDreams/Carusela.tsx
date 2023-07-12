import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const CardCarusela = styled.div `
  height: 600px;
  width: 600px;

  @media screen and(max-width: 700px){
    height: 400px;
    width: 400px;
  }

`;

const CursorPointer = styled.div `
  cursor: pointer;
`;

const CarouselBtnleft = styled.div `
  margin-left: -10px;
  margin-top: 0;
  position: absolute;
  
  @media screen and (max-width: 700px) {
    margin-left: -7px;
    margin-top: -255px;
  }
`;

const CarouselBtnRight = styled.div `
  margin-left: 602px;
  margin-top: -152px;

  @media screen and (max-width: 700px) {
    margin-left: 267px;
    margin-top: -255px;
    position: absolute;
  }

`;


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 700 },
        items: 3,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 700, min: 0 },
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

            <CarouselBtnleft onClick={() => previous()}>
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.79922 14.7968L3.79922 8.79678L9.79922 2.79678L8.59922 0.396776L0.199219 8.79678L8.59922 17.1968L9.79922 14.7968Z" fill="#6C6C6C"></path>
                </svg>
            </CarouselBtnleft>

            <CarouselBtnRight onClick={() => next()}>
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.20078 2.796L6.20078 8.796L0.20078 14.796L1.40078 17.196L9.80078 8.796L1.40078 0.395996L0.20078 2.796Z" fill="#6C6C6C"></path>
                </svg>
            </CarouselBtnRight>
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
                            <img src={image.src} alt="card" />
                        </div>
                    );
                })
                }
            </Carousel>
        </CardCarusela>
    );
};
export default Carusela;
