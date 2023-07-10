import styled from "styled-components";
import React from "react";

const ListSquare = styled.div`
position: relative;
  //height: 75px;
  //width: 75px;
  padding-left: 15px;
`


const UserPhoto = (props) => {
    <ListSquare>
        {props.children}
    </ListSquare>
}

export default UserPhoto;
