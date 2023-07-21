import styled from "styled-components";

export const FormButton = styled.button`
  align-items: center;
  background: linear-gradient(#fff, #fff), linear-gradient(160deg, #84fad5 20%, #ebbfff 37%, #f6ec85 53%);
  background-clip: content-box, border-box;
  background-origin: border-box;
  border: 1px double transparent; 
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: #000;
  height: 36px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  &:hover {
    background: linear-gradient(320deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);
    border-radius: 8px;
    color: #262626;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
  }
`