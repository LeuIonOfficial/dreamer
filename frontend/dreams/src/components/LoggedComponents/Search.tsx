import styled from "styled-components";
import {useState} from "react";
import DivContainer from "./DivContainer";
import SearchResults from "./SearchResults";
import {Users} from "./users";
import React from 'react'

const SearchBar = styled.div`
  width: 300px;
  line-height: 0;
  @media screen and (max-width: 600px){
    display: none;
  }
`

const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  background-color: #f8f9fa;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  margin: 0px;
  font-size: 14px;
  padding: 0px 10px;
  @media screen and (max-width: 600px) {
    display: none;
  }
  &:focus {
    outline: 1px solid #6d6d6d;
  }
`

const Search = (props) => {
    const [query, setQuery] = useState("");
    console.log(query);
    // props.onChange
    const searching = (data) => {
        return data.filter(el => el.first_name.toLowerCase().includes(query.toLowerCase()) ||
            el.last_name.toLowerCase().includes(query.toLowerCase())
        )}
    // console.log(searching(Users));
    return (
        <DivContainer justify={"center"}>
        <SearchBar>
            <SearchInput type = "text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
        </SearchBar>
            <SearchResults data={searching(Users)}></SearchResults>
        </DivContainer>
    )
}

export default Search;
