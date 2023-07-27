import styled from "styled-components";
import {useNavigate} from "react-router-dom";
//c

/*const CardWrapperClosed = styled.div`
  position: absolute;
  max-height: 0px;
  overflow: hidden;
  top: 100%;
  right: 10%;
  width: 180px;
  box-shadow: 0 0 1.25rem 0 rgba(0,0,0,.1);
/!*  &.OpenMenu{
    max-height: 400px;
  }*!/
`
const CardWrapperOpen = styled.div`
  position: absolute;
  max-height: 400px;
  overflow: hidden;
  top: 100%;
  right: 10%;
  width: 180px;
  box-shadow: 0 0 1.25rem 0 rgba(0,0,0,.1);
`*/

const Card = styled.div`
background: white;
  border: none;
  border-radius: 5px;
  left: auto;
  padding: 0;
  right: 0;
  top: 100%;

  webkit-animation: fade-in-bottom .6s cubic-bezier(.39,.575,.565,1) both;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation-name: fade-in-bottom;

  animation: fade-in-bottom .6s cubic-bezier(.39,.575,.565,1) both;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation-name: fade-in-bottom;

  transition: all .3s ease-in-out;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: all;
   @media screen and (max-width: 500px){
     padding: 0 8px;
   }
`

const Line = styled.hr``;
const MyProfileList = (props) => {

    return (
        // <CardWrapperOpen>
            <Card>
                {props.children}
            </Card>
        // </CardWrapperOpen>

    )
}

//не готово

export default MyProfileList;
