import styled from "styled-components";

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

const Search = () => {
    return (
        <SearchBar>
            <SearchInput type = "text" placeholder="Search..." />
        </SearchBar>
    )
}

export default Search;
