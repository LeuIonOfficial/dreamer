import styled from "styled-components";

const SearchBar = styled.div`
  width: 300px;
  line-height: 0;
  @media screen and (max-width: 480px){
    display: none;
  }
  
`
const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  margin: 0px;
  padding: 0px 5px ;
  @media screen and (max-width: 480px){
    display: none;
  }
`

const Search = () => {
    return (
        <SearchBar>
            <SearchInput type = "text" placeholder="Search.." />
        </SearchBar>
    )
}

export default Search;
