import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const CardCarusela =styled.div `
  height: 600px;
  width: 600px;
  
  @media(max-width: 768px){
    height:600px;
    width:600px;
  }
  
`
const ImaginiCarusela = styled.div `
  width: 200px;
  height: 300px;
  
  
`

const CursorPointer = styled.div `
  cursor: pointer;
`

const CarouselBtnleft = styled.div `
  margin-right: 460px;
  margin-top: 150px;
  position: absolute;
  top: 40%;
`

const CarouselBtnRight = styled.div `
  margin-left: 602px;
  margin-top: 150px;
  position: absolute;
  top: 40%;
  
  @media(max-width: 768px) {
    margin-top: 270px;
  }
  
`


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.79922 14.7968L3.79922 8.79678L9.79922 2.79678L8.59922 0.396776L0.199219 8.79678L8.59922 17.1968L9.79922 14.7968Z" fill="#6C6C6C"></path>
                </svg>
            </CarouselBtnleft>

            <CarouselBtnRight onClick={() => next()}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
