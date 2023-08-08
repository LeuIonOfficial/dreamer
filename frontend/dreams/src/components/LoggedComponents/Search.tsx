import styled from "styled-components";
import {useCallback, useEffect, useMemo, useState} from "react";
import React from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SearchBar = styled.div`
  width: 300px;
  line-height: 0;
`

const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  background-color: #f8f9fa;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  margin: 0;
  font-size: 14px;
  padding: 0 10px;

  
  &:focus {
    outline: 1px solid #6d6d6d;
  }
`

const SearchContainer = styled.div`
  display: block;
  width: 100%;
  animation: fade-in-bottom .6s cubic-bezier(.39,.575,.565,1) both;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  left: auto;
  padding: 0;
  position: absolute;
  right: 0;
  top: 100%;
  transition: all .3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0,0,0,.06);
  margin-top: 0.625rem;
  border: 0;
  @media screen and (max-width: 800px) {
    width: 95%;
    display: contents;
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
const SearchUser = styled.div`
  border-bottom: 1px solid rgb(242, 242, 242);
  cursor: pointer;
  padding: 5px 5px 5px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

`
const ListUsers = styled.div`
  width: 98%;
  max-height: 300px;
  overflow: auto;
`

const SearchBlock = styled.div`
position: relative;
  width: 300px;
  @media (max-width: 800px){
    width: 100%;
    padding-top: 10px;
  }
`
const Search = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        userData();
    }, []);

    const userData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data);
        } catch (error) {
            // Handle error
        }
    };

    const filteredData = useMemo(() => {
        if (searchValue.trim() === '') {
            return [];
        }
        return data.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [data, searchValue]);

    return (
        <SearchBlock>
        <SearchInput
            value={searchValue}
            type="text"
            placeholder="Search..."
            onChange={(event) => setSearchValue(event.target.value)}
        />
        <SearchContainer>

            <ListUsers>
                {filteredData.length > 0 ? (
                    filteredData.map(({ image, title }) => (
                        <SearchUser key={title}>
                            <BlockImg onClick={() => navigate('/user-profile')}>
                                <img src={image} alt="#" />
                            </BlockImg>
                            <MyTitle>
                                <h6 onClick={() => navigate('/user-profile')}>{title}</h6>
                            </MyTitle>
                        </SearchUser>
                    ))
                ) : (
                    searchValue.trim() !== '' && <h1>No result</h1>
                )}
            </ListUsers>
        </SearchContainer>
        </SearchBlock>
    );
};


export default Search;
