import styled from "styled-components";

const ImgBox = styled.div`
padding: 0;
margin: 0;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`


const SmallImages = (props) => {
    return (
        <ImgBox>
            {props.children}
        </ImgBox>
    )
}

export default SmallImages;
