import styled from "styled-components";
import {Users} from "./users";
import {useState, useRef} from "react";
import React from "react";

const ListUsers = styled.table`
  background-color: white;
  border: none;
  width: 300px;
  top: 100%;
  margin: 5px;
  list-style: none;
  position: absolute;
  z-index: 1000;
  box-shadow: 0 33px 20px rgba(0,0,0,.06), 0 7.371px 4.467px rgba(0,0,0,.01), 0 2.195px 1.33px rgba(0,0,0,.01);
`

const AddScroll = styled.tbody`
  display: block;
  max-height: 310px;
  overflow-y: scroll;
  font-size: 14px;
`

const UsersInfo = styled.li`
  margin-bottom: 0px;
  font-size: 14px;
  color: #444;
  font-weight: 300;
`
const Fields = styled.td`
border-bottom: 1px solid rgb(242, 242, 242);
  text-align: left;
  padding: 5px;
`

const PhotoField = styled.div`
    border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #e2e2e2;
`

//заменить тэйбл на div
const SearchResults = ({data}) => {
    // const [query, setQuery] = useState("");
    // console.log(searchLetter);
    return (
        <ListUsers>
        <AddScroll>
        {/*<tr>*/}
        {/*    <th>Photo</th>*/}
        {/*    <th>name</th>*/}
        {/*    <th>surname</th>*/}
        {/*</tr>*/}
        {data.map((item) => (
        <tr key={item.id}>
          {/*  {item.id}*/}
            <Fields><PhotoField></PhotoField></Fields>
            <Fields>{item.first_name}</Fields>
            <Fields>{item.last_name}</Fields>
        </tr>
        ))}
        </AddScroll>
    </ListUsers>
    )
}

export default SearchResults;
// @ts-ignore
