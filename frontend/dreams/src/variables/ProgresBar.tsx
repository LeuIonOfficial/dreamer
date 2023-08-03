import styled from "styled-components";
import {useState} from "react";

const ProgressBar = styled.div`
  height: 16px;
  background-color: #e9ecef;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px 0 10px;
  display: flex;
  overflow: hidden;

  &:hover {
    border: 1px solid gray;
  }
`
const Bar = styled.div`
  cursor: pointer;
  background: linear-gradient(114.93deg, #84fad5 1.02%, #ebbfff 44.33%, #f6ec85 76.07%);
  width: ${({progress}) => progress}%;
`

export const ProgresBar = ({handleShowCard, hideShowCard}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    const progress = (20 / 30) * 100;
    return (
        <ProgressBar onClick={toggleModal}>
            <Bar progress={progress}></Bar>
        </ProgressBar>
    )
}