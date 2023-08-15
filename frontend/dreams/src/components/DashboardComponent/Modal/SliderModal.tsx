import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import ButtonArrowRight from "../../../assets/media/button_arrow_right.svg";
import ButtonArrowLeft from "../../../assets/media/button_arrow_left.svg";
import React from "react";

const ButtonLeft = styled.div`
  left: 0;
  align-items: center;
  background: none;
  border: 0;
  display: flex;
  justify-content: center;
  opacity: .5;
  padding: 0;
  position: absolute;
  text-align: center;
  transition: opacity .15s ease;
  width: 15%;
  z-index: 1;
  bottom: 0;
  top: 0;
`
const ButtonRight = styled.div`
  right: 0;
  align-items: center;
  background: none;
  border: 0;
  display: flex;
  justify-content: center;
  opacity: .5;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 15%;
  z-index: 1;
  bottom: 0;
  top: 0;
`
const Img2 = styled.img`
  width: 32px;
  height: 32px;
  &:hover{
    filter: brightness(0) invert(1);
  }
`

const ProfileImage=styled.img`
  border-radius: 10px 10px 0 0;
  height: 777px;
  object-fit: contain;
  width: 100%;
`

const responsive = {
    desktop: {
        breakpoint: { max: 10000, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ButtonGroup = ( { next, previous }: any ) => {
    return (
        <div className="cursor-pointer opacity-0 hover:opacity-100">
            <ButtonLeft className="absolute" onClick={() => previous()}>
                <Img2 src={ButtonArrowLeft} alt="Your SVG"/>
            </ButtonLeft>
            <ButtonRight className="absolute" onClick={() => next()}>
                <Img2 src={ButtonArrowRight} alt="Your SVG"/>
            </ButtonRight>
        </div>
    );
}

 export const SliderModal = ({ images }) => {
    console.log(images)
    return (
        <Carousel
            arrows={false}
            responsive={responsive}
            infinite={true}
            customButtonGroup={<ButtonGroup />}
        >
            <ProfileImage src={images} alt={`card+1`} />
        </Carousel>
    );
};