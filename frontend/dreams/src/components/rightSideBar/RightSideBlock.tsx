import RightSideBar from "./RightSideBar";
import styled from "styled-components";
import axios from "axios";
// @ts-ignore
import React, {useEffect, useState} from "react";
import FulfillModal from "../Fulfill/FulfillModal";


const ContainerRightSideBlock = styled.div`
  //position: fixed;
  right: 0;
  min-width: 280px;

  & * {
    font-family: 'Space Grotesk', sans-serif;
  }

  @media only screen and (width < 769px) {
    display: none;
`
const TitleBlock = styled.div`
  text-align: left;
  margin: 15px;
`
const TitleContainerRightBlock = styled.span`
  font-weight: 700;
  color: #777d74;
`
const CardBlock = styled.div`
  height: 89.5vh;
  margin-right: 5px;
  padding-bottom: 33px;
  overflow: scroll;

  &::-webkit-scrollbar {
    border-radius: 20px;
    height: 0.5rem;
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #b9b9b9;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    //width: 250px;
  }
  @media (max-width: 570px) {
    width: 100%;
  }
`
const MobileRightSideBlock = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
  @media only screen and (width > 768px ) {
    display: none;
  }

  & * {
    font-family: 'Space Grotesk', sans-serif;
  }

`
const BlockContainer = styled.div`

`
const RightSideBlock = ({showCard}) => {

    const [data, setData] = useState([])
    const [modal, setModal] = React.useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/usersAll').then((response) => {
            return setData(response.data)
        })
    }, [])
    console.log(data);
    // const object = {
    //     key: () => {openModal}
    // }


    const [card, setCard] = React.useState(false);
    const openCard = (event) => {
        event.preventDefault()
        setCard(true)
    }
    const openModal = (event) => {
        event.preventDefault()
        setModal(true)
    }

    const closeModal = (event) => {
        event.preventDefault()
        setModal(false)
    }

    return (
        <div>
            <ContainerRightSideBlock>
                <TitleBlock>
                    <TitleContainerRightBlock>Last fulfilled</TitleContainerRightBlock>
                </TitleBlock>
                <CardBlock>
                    {data.map(({id, firstName, lastName, image, email}) => {
                        return (
                            <RightSideBar key={id} img={image} name={firstName} lastname={lastName}
                                          dream={email} openModal={openModal}></RightSideBar>)
                    })}
                </CardBlock>
            </ContainerRightSideBlock>

            <MobileRightSideBlock>
                {/*<Button onClick={() => setCard(true)}>Last fulfilled</Button>*/}
                {showCard && (<CardBlock>
                    {data.map(({id, firstName, lastName, image, email}) => {
                        return (
                            <RightSideBar key={id} img={image} name={firstName} lastname={lastName}
                                          dream={email} openModal={openModal}></RightSideBar>)
                    })}
                </CardBlock>)}
            </MobileRightSideBlock>
            <div>
                {modal && <FulfillModal closeModal={closeModal}/>}
            </div>
        </div>
    )
}


export default RightSideBlock
