import {ThemeProvider} from "@material-tailwind/react";
import children = ThemeProvider.propTypes.children;
import Button from "../Authorization/Button";
import styled from "styled-components";
// @ts-ignore
import React from "react";
import {useState} from "react";
import FulfillModal from "../Fulfill/FulfillModal";


const CardRightSideBar = styled.div`
  margin: 10px;
`
const CardBlock = styled.div`
  box-shadow: 0 5px 1.25rem 0 rgba(0,0,0,.1);
  margin: 3px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`
const CardContent = styled.div`
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`
const CardUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

`
const BlockImg = styled.div`
  margin-right: 5px;

  & img {
    object-fit: cover;
    cursor: pointer;
    height: 45px;
    line-height: 45px;
    width: 45px;
    vertical-align: middle;
    border-radius: 50%;
  }
`
const MyTitle = styled.div`
  width: 75px;
  cursor: pointer;
  margin: 0 5px 5px 0;

  & h6 {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    line-height: 1;
    font-weight: bolder;
    margin-bottom: 0.3125rem;
    font-size: .875rem;
    color: #3f414d;
    margin-top: 0;
  }

  & p {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    line-height: 1;
    font-weight: bolder;
    margin-bottom: 0.3125rem;
    font-size: .875rem;
    color: #3f414d;
    margin-top: 0;
  }
`
const BlockFulfill = styled.div`
  position: relative;

`

const RightSlideBar = ({img, name, lastname, dream, openModal}) => {


    return (
        <>
            <CardRightSideBar>
                <CardBlock>
                    <CardContent>
                        <CardUser>
                            <BlockImg>
                                <img src={img} alt="#"/>
                            </BlockImg>
                            <MyTitle>
                                <h6>{name} {lastname}</h6>
                                <p>{dream}</p>
                            </MyTitle>
                        </CardUser>
                        <BlockFulfill>
                            <Button onClick={openModal}>Fulfill</Button>
                        </BlockFulfill>
                    </CardContent>
                </CardBlock>
            </CardRightSideBar>

        </>
    )
}

export default RightSlideBar
