import styled from "styled-components";

const FormButton = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  position: relative;
  z-index: 1;
  border-radius: 5px;
  background-image: linear-gradient(to right top, #84fad5, #70f4f1, #7aebff, #97e0ff, #b5d4ff, #cccbff, #e7c1f5, #ffb8e0, #ffb9c6, #ffc3a6, #ffd58c, #f6ec85);
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  &::before {
    content: "";
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    border-radius: 4px;
    background-color: white;
    z-index: -1;
    transition: 200ms
  }

  &:hover {
    font-weight: 700;
    font-size: 16px;
  }

  &::after {
    font-size: 16px;
    background-image: linear-gradient(to right top, #84fad5, #70f4f1, #7aebff, #97e0ff, #b5d4ff, #cccbff, #e7c1f5, #ffb8e0, #ffb9c6, #ffc3a6, #ffd58c, #f6ec85);
    -webkit-background-clip: text;
    color: transparent;
    transition: 200ms
  }

  &:hover::before {
    opacity: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    color: white;
  }
`
const Button = (props) => {
    return <FormButton {...props}> { props.children } </FormButton>
}

export default Button