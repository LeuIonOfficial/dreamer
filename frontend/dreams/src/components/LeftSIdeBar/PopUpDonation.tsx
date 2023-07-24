import styled from "styled-components";
import React, {useEffect, useState} from "react";
import axios from "axios";
import RightSideBar from "../rightSideBar/RightSideBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`
const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.51);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const ModalContainer = styled.div`
  position: absolute;
  min-height: 550px;
  height: 500px;
  min-width: 420px;
  background: #f1f1f1;
  border-radius: 3px;
  min-height: auto;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 15px 30px 15px;
  border-bottom: 1px solid #d2d2d2;
  width: auto;

  & h5 {
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 1.5;
  }

  & img {
    background-image: url("./../../../../src/assets/wing/close.png");
    height: 25px;
    width: 25px;
    opacity: 60%;

    &:hover {
      cursor: pointer;
    }
  }
`
const DonatorsContainer = styled.div`
  padding-bottom: 0;
  padding: 1.25rem 1.25rem 0 1.25rem;
  position: relative;
`
const ListContainer = styled.ul`
  width: 390px;
  height: 320px;
  padding: 0.625rem 0.625rem 0 0.625rem;
  margin: 0;
  overflow: auto;
  & div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }
`
const List = styled.li`
  margin: 0 0.625rem 0.625rem 0.625rem;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  & h6{
    font-family: Space Grotesk,serif;
    font-style:normal;
    font-weight: 400;
    font-size: .875rem ;
    color: #3f414d;
    margin-bottom: 0;
    margin-top: 0;
  }
`
const ProfilePic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  line-height: 40px;
  object-fit: cover;
  vertical-align: middle;
  margin-right: 20px;
  
`
const ModalFooter = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-top: 1px solid #d2d2d2;
  width: auto;
`

export const PopUpDonation = ({closeModal}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => setUsers(res.data)
        )
    }, [])

    return (
        <Container onClick={closeModal}>
            <Overlay></Overlay>
            <ModalContainer>
                <HeaderContainer>
                    <h5>Deam Makers</h5>
                    <img src="./../../../../src/assets/wing/close.png" alt="close" onClick={closeModal}/>
                </HeaderContainer>
                <DonatorsContainer>
                    <ListContainer>
                        <div>
                            {users.map(({ title, image}) => {
                                return (
                                    <List>
                                        <ProfilePic src={image}></ProfilePic>
                                        <h6>{title}</h6>
                                    </List>)
                            })}
                        </div>
                    </ListContainer>

                </DonatorsContainer>
                <ModalFooter></ModalFooter>



            </ModalContainer>
        </Container>
    )
}
