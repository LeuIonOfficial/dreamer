import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: max-content;
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 35px;
  margin: 20px;
  border: 2px solid;
  border-image: linear-gradient(114.93deg, #84fad5 1.02%, #ebbfff 44.33%, #f6ec85 76.07%);
  border-image-slice: 3;
  box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
  
  @media (max-width: 400px) {
    padding: 10px;
  }
`

export const Header = styled.div`
  & h1 {
    color: #333;
    font-weight: 700;
    font-size: 1.70rem;
    text-align: start;
  }
`

export const Toolbar = styled.div`
  display: grid;
  grid-template-columns: 105px 105px 105px 105px 105px;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 105px 105px 105px;
  
  }
  
  @media (max-width: 500px) {
    width: 220px;
    grid-template-columns: 105px 105px;
    gap: 10px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0;

  & textarea {
    resize: none;
    width: 100%;
    height: 100px;
    background: #fbfbfb;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    color: #a3a5a6;
    outline: none;
    line-height: 22px;
    padding: 10px;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  & div {
    flex-direction: row;
  }

  & input {
    resize: none;
    width: 30%;
    height: 22px;
    background: #fbfbfb;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    color: #a3a5a6;
    outline: none;
    line-height: 22px;
    margin-right: 10px;
    padding: 10px;
    
    @media (max-width: 500px) {
      width: 50%;
    }

  }
`

export const FrameStyled = styled.div`
  position: relative;
  width: 105px;
  height: 105px;
  display: flex;
  align-items: center;

  & label {
    cursor: pointer;
  }

  & input {
    display: none;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
  
  

  & Button {
    margin: 0 10px;
    
    & span {
      padding: 20px;
    }
    
    @media (max-width: 500px) {
      width: 50%;
    }
  }
`

export const ImageButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: white;
  position: absolute;
  bottom: 10px;
  right: 0;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 105px;
  height: 105px;
  //margin: 0 10px 0 0;
  border-radius: 50%;
  background: #e5e5e5;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 50%;
  }
`
