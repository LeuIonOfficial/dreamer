import styled from "styled-components";

const MainContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  padding: 15px 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 450px;
  height: auto;
  border-radius: 5px;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;  
    margin-left: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Background = styled.div`
  padding: 6px 9px;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ImgInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  display: block;
  background-color: #f5f5f5;
  color: #bdbdbd;
`;

const ImageBox = styled.div`
  background-image: ${props => (props.background ? `url(${props.background})` : 'none')};
  background-size: cover;
  background-color: #f5f5f5;
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
  margin-left: 7px;
  &:hover {
    color: #757575;
    border: 1px solid #e0e0e0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
  color: rgb(79, 79, 79);
  margin-right: auto;
`;

const SvgIcon = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  background-color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  font-size: 10px;

  ${ImageBox}:hover & {
    display: ${props => (props.visible ? 'block' : 'none')};
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DropdownItem = styled.span`
  display: block;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    color: #f5f5f5;
  }
`;

const EditIcon = styled.div`
  color: #757575;
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const DeleteIcon = styled.div`
  fill: #000;
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const EditButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export {
    MainContainer,
    Container,
    Background,
    ImageRow,
    ImgInput,
    ImageBox,
    Title,
    SvgIcon,
    Dropdown,
    DropdownItem,
    EditIcon,
    DeleteIcon,
    EditButton
}