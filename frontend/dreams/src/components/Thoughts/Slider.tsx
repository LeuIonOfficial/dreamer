import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css"


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const sliderImageSrc = [
    {
        src:
            "../src/assets/media/design.1720f62b428df4deb300.png"
    },
    {
        src:
            "../src/assets/media/marketing.bc5622fa6d0e315376ce.png"
    },
    {
        src:
            "../src/assets/media/ceoFounder.cee090e894b0d8a58d9b.png"
    },
];

const ButtonGroup = ({ next, previous }: any) => {
    return (
        <div className="cursor-pointer">
            <div className="carousel-btn-left" onClick={() => previous()}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.79922 14.7968L3.79922 8.79678L9.79922 2.79678L8.59922 0.396776L0.199219 8.79678L8.59922 17.1968L9.79922 14.7968Z" fill="#6C6C6C"></path>
                </svg>
            </div>
            <div className="carousel-btn-right" onClick={() => next()}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.20078 2.796L6.20078 8.796L0.20078 14.796L1.40078 17.196L9.80078 8.796L1.40078 0.395996L0.20078 2.796Z" fill="#6C6C6C"></path>
                </svg>
            </div>
        </div>
    );
}

const Slider = () => {
    return (
        <div className="card">
            <Carousel
                arrows={false}
                responsive={responsive}
                infinite={true}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup/>}
            >
                {sliderImageSrc.map((image, index) => {
                    return (
                        <div className="slider" key={index}>
                            <img src={image.src} alt="card" />
                        </div>
                    );
                })
                }
            </Carousel>
        </div>
    );
};
export default Slider;
