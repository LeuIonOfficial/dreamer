import styled from "styled-components";

const ImageBox = styled.div`
  background: ${props => props.background || '#f5f5f5'};
  color: #bdbdbd;
  cursor: pointer;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  margin-bottom: 20px;
`

const AddImg = (props) => {
  return (
      <ImageBox background={props.background} width={props.width} height={props.height} >
        {props.children}
    </ImageBox>)
}

export default AddImg;
