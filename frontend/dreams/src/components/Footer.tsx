import styled from "styled-components";
import BgGalaxy from "./UnloggedComponents/BgGalaxy.tsx";
import DreamerzLogo from "./GeneralComponents/DreamerzLogo.tsx";

const Footers = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  bottom: 0;
  //width: 100%;
  font-family: 'Space Grotesk', sans-serif;
`

const GreyFooter = styled.div`
    //bottom: 0px;
  padding: 20px;
  //width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777D74;
`

const LowerFooter = (props) => {
    return(
        <GreyFooter>
            {props.children}
        </GreyFooter>)
}

const DreamerzText = styled.span`
margin-left: 5px;
`

const Pages = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`
const LinksContainer = styled.div`
display: flex;
justify-content: space-between;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  @media screen and (max-width: 480px){
    width: 100%;
  }
  @media screen and (min-width: 481px) {
    width: 50%;
  }
`
const InstaFb = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
  margin: 10px;
  padding: 0px;
  cursor: pointer;
`

const LinksForPages = ({children}) => {
    return (
        <LinksContainer>
            {children}
        </LinksContainer>
    )
}
const SocialMedia = ({children}) => {
    return(
        <InstaFb>
            {children}
        </InstaFb>
    )
}
const Insta = styled.div`
margin-right: 20px`
const Footer = () => {
    return(
        <Footers>
            <BgGalaxy>
            <div>
                <DreamerzLogo></DreamerzLogo>
            </div>
            <LinksForPages>
                <Pages>How it works</Pages>
                <Pages>About Us</Pages>
                <Pages>Terms</Pages>
                <Pages>Privacy</Pages>
                <Pages>FAQ</Pages>
            </LinksForPages>
            <SocialMedia>
            <Insta>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.12 16C21.12 17.0126 20.8197 18.0025 20.2571 18.8445C19.6945 19.6865 18.8949 20.3427 17.9593 20.7303C17.0238 21.1178 15.9943 21.2192 15.0011 21.0216C14.008 20.8241 13.0957 20.3364 12.3796 19.6204C11.6636 18.9043 11.1759 17.992 10.9784 16.9989C10.7808 16.0057 10.8822 14.9762 11.2697 14.0407C11.6573 13.1051 12.3135 12.3055 13.1555 11.7429C13.9975 11.1803 14.9874 10.88 16 10.88C17.3566 10.8842 18.6565 11.425 19.6157 12.3843C20.575 13.3435 21.1158 14.6434 21.12 16ZM32 8.96V23.04C32 25.4163 31.056 27.6954 29.3757 29.3757C27.6954 31.056 25.4163 32 23.04 32H8.96C6.58366 32 4.30465 31.056 2.62432 29.3757C0.943997 27.6954 0 25.4163 0 23.04V8.96C0 6.58366 0.943997 4.30465 2.62432 2.62432C4.30465 0.943997 6.58366 0 8.96 0H23.04C25.4163 0 27.6954 0.943997 29.3757 2.62432C31.056 4.30465 32 6.58366 32 8.96ZM23.68 16C23.68 14.481 23.2296 12.9962 22.3857 11.7332C21.5418 10.4703 20.3423 9.48589 18.939 8.90461C17.5357 8.32332 15.9915 8.17124 14.5017 8.46757C13.0119 8.7639 11.6435 9.49535 10.5694 10.5694C9.49535 11.6435 8.7639 13.0119 8.46757 14.5017C8.17124 15.9915 8.32332 17.5357 8.90461 18.939C9.48589 20.3423 10.4703 21.5418 11.7332 22.3857C12.9962 23.2296 14.481 23.68 16 23.68C18.0369 23.68 19.9903 22.8709 21.4306 21.4306C22.8709 19.9903 23.68 18.0369 23.68 16ZM26.24 7.68C26.24 7.30026 26.1274 6.92905 25.9164 6.61331C25.7054 6.29756 25.4056 6.05147 25.0548 5.90615C24.7039 5.76083 24.3179 5.72281 23.9454 5.79689C23.573 5.87098 23.2309 6.05384 22.9624 6.32235C22.6938 6.59087 22.511 6.93298 22.4369 7.30543C22.3628 7.67787 22.4008 8.06392 22.5462 8.41475C22.6915 8.76559 22.9376 9.06545 23.2533 9.27642C23.569 9.48739 23.9403 9.6 24.32 9.6C24.8292 9.6 25.3176 9.39771 25.6776 9.03765C26.0377 8.67758 26.24 8.18922 26.24 7.68Z" fill="white"></path></svg>
            </Insta>
                <div>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 0C27.6528 0 29.066 0.586806 30.2396 1.76042C31.4132 2.93403 32 4.34722 32 6V26C32 27.6528 31.4132 29.066 30.2396 30.2396C29.066 31.4132 27.6528 32 26 32H22.0833V19.6042H26.2292L26.8542 14.7708H22.0833V11.6875C22.0833 10.9097 22.2465 10.3264 22.5729 9.9375C22.8993 9.54861 23.5347 9.35417 24.4792 9.35417L27.0208 9.33333V5.02083C26.1458 4.89583 24.9097 4.83333 23.3125 4.83333C21.4236 4.83333 19.9132 5.38889 18.7812 6.5C17.6493 7.61111 17.0833 9.18056 17.0833 11.2083V14.7708H12.9167V19.6042H17.0833V32H6C4.34722 32 2.93403 31.4132 1.76042 30.2396C0.586806 29.066 0 27.6528 0 26V6C0 4.34722 0.586806 2.93403 1.76042 1.76042C2.93403 0.586806 4.34722 0 6 0H26Z" fill="white"></path></svg>
                </div>
            </SocialMedia>
            </BgGalaxy>
            <LowerFooter>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.75C3.10078 0.75 0.75 3.10078 0.75 6C0.75 8.89922 3.10078 11.25 6 11.25C8.89922 11.25 11.25 8.89922 11.25 6C11.25 3.10078 8.89922 0.75 6 0.75ZM6 10.3594C3.59297 10.3594 1.64062 8.40703 1.64062 6C1.64062 3.59297 3.59297 1.64062 6 1.64062C8.40703 1.64062 10.3594 3.59297 10.3594 6C10.3594 8.40703 8.40703 10.3594 6 10.3594ZM6.06562 4.1168C6.68672 4.1168 7.10859 4.51289 7.15547 5.09414C7.15898 5.14336 7.2 5.18086 7.24922 5.18086H7.91367C7.94414 5.18086 7.96875 5.15625 7.96875 5.12578C7.96875 4.10977 7.16719 3.39844 6.06211 3.39844C4.77422 3.39844 4.03125 4.26797 4.03125 5.70469V6.31758C4.03125 7.74375 4.77422 8.60156 6.06211 8.60156C7.16367 8.60156 7.96875 7.9125 7.96875 6.94453C7.96875 6.91406 7.94414 6.88945 7.91367 6.88945H7.24805C7.19883 6.88945 7.15898 6.92695 7.1543 6.975C7.10508 7.51523 6.68437 7.88672 6.06445 7.88672C5.29922 7.88672 4.86797 7.32539 4.86797 6.32109V5.70469C4.86914 4.68516 5.30156 4.1168 6.06562 4.1168Z" fill="#4F4F4F"></path></svg>
                <DreamerzText>Dreamerz 2022</DreamerzText>
            </LowerFooter>
        </Footers>
    )
}

export default Footer;
