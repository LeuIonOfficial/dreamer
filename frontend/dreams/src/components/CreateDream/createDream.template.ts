import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 550px;
  background: #fff;
  box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 35px;
  margin: 20px;

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
  height: 150px;
  background-color: gray;
  border-radius: 50%;
  margin: 0 10px;
`

export const AddButton = styled.span`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 20px;
  right: 0;
  background-color: white;
  border-radius: 50%;
  
  & label {
    cursor: pointer;
  }
  
  & input {
    display: none;
  }
`

export const Img = styled.img`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const Fill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
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
