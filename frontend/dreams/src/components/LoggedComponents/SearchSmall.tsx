import styled from "styled-components";

const SearchBar = styled.div`
  width: ${props => props.width};
  line-height: 0;
  @media screen and (min-width: 601px){
    display: none;
  }
`

const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #f8f9fa;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  margin: 14px 15px 0;
  font-size: 14px;
  padding: 0px 10px;
  @media screen and (min-width: 601px) {
    display: none;
  }
  &:focus {
    outline: 1px solid #6d6d6d;
  }
`

const SearchSmall = (props) => {
    return (
        <SearchBar width={props.width}>
            <SearchInput type = "text" placeholder="Search..." />
        </SearchBar>
    )
}

export default SearchSmall;
