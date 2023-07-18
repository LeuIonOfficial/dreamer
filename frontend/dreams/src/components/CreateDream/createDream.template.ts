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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;

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

  }
`

export const FrameStyled = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
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

  & button {
    margin: 0 10px;
  }
`

export const CloseButton = styled.span`
  width: 25px;
  height: 25px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`

export const Image = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
  margin: 0 10px 20px 0;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 2px;
  }
`
