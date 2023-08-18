import {ThemeProvider} from "@material-tailwind/react";
import children = ThemeProvider.propTypes.children;
import Button from "../Authorization/Button";
import styled from "styled-components";
// @ts-ignore
import React from "react";
import {useState} from "react";
import FulfillModal from "../Fulfill/FulfillModal";
import {useNavigate} from "react-router-dom";
import {PiUserFill} from "react-icons/pi";


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
  & svg {
    object-fit: cover;
    cursor: pointer;
    height: 45px;
    line-height: 45px;
    width: 45px;
    vertical-align: middle;
    border-radius: 50%;
    color: #777d74;
    background-color: #f8f9fa;
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
    //display: -webkit-box;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    line-height: 1;
    margin-bottom: 0.3125rem;
    font-size: .875rem;
    color: #3f414d;
    margin-top: 0;
    font-weight: 400;
  }
`
const BlockFulfill = styled.div`
  display: block;
  & Button{
    width: 55px;
    height: 36px;
    & samp{
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  }
`

const RightSlideBar = ({img, name, lastname, dream, openModal}) => {
const navigate = useNavigate()

    return (
        <>
            <CardRightSideBar>
                <CardBlock>
                    <CardContent>
                        <CardUser>
                            <BlockImg onClick={() => navigate("/user-profile")}>
                                {img ? (
                                    <img src={img} alt="#" />
                                ) : (
                                    <PiUserFill/>
                                )}
                            </BlockImg>
                            <MyTitle>
                                <h6 onClick={() => navigate("/user-profile")}>{name} {lastname}</h6>
                                <p>{dream}</p>
                            </MyTitle>
                        </CardUser>

                        <BlockFulfill>
                            <Button onClick={openModal}>
                                <span>
                                    Fulfill
                                </span>
                            </Button>
                        </BlockFulfill>

                    </CardContent>
                </CardBlock>
            </CardRightSideBar>

        </>
    )
}

export default RightSlideBar
