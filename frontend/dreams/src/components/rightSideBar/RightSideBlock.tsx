import RightSideBar from "./RightSideBar";
import styled from "styled-components";
import axios from "axios";
// @ts-ignore
import React, {useEffect, useState} from "react";
import Button from "../Authorization/Button";
import FulfillModal from "../Fulfill/FulfillModal";


const ContainerRightSideBlock = styled.div`
  position: fixed;
  right: 0;
  width: 310px;

  & * {
    font-family: 'Space Grotesk', sans-serif;
  }

  @media only screen and (width < 601px) {
    display: none;
`
const TitleBlock = styled.div`
  text-align: left;
  margin: 15px;
`
const TitleContainerRightBlock = styled.span`
  font-weight: 700;
`
const CardBlock = styled.div`
  height: 89.5vh;
  margin-right: 2px;
  padding-bottom: 33px;
  overflow: scroll;
`
const MobileRightSideBlock = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
  @media only screen and (width > 601px ) {
    display: none;
  }
  & * {
    font-family: 'Space Grotesk', sans-serif;
  }

`
const RightSideBlock = () => {

    const [data, setData] = useState([])
    const [modal, setModal] = React.useState(false);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            return setData(response.data)
        })
    }, [])

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
                    {data.map(({id, title, description, image}) => {
                        return (
                            <RightSideBar key={id} img={image} name={title} lastname={""}
                                          dream={description} openModal={openModal}></RightSideBar>)
                    })}
                </CardBlock>
            </ContainerRightSideBlock>

            <MobileRightSideBlock>
                <Button onClick={() => setCard(true)}>Last fulfilled</Button>
                {card && (<CardBlock>
                    {data.map(({id, title, description, image}) => {
                        return (
                            <RightSideBar key={id} img={image} name={title} lastname={""}
                                          dream={description} openModal={openModal}></RightSideBar>)
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
