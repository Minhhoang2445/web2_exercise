import SearchIcon from './SearchIcon'
import styled from "styled-components"
import { useState } from 'react';
function Search ({ onSearch }){
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value); // Gửi giá trị lên cha
  }

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchCustom placeholder="Search Items" value={keyword} onChange={handleChange} />
        </SearchWrapper>
    );
}

const SearchWrapper = styled.div`
  border: 1px solid #e6ecf0;
  border-radius: 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;
    width: fit-content;
`;

const SearchCustom = styled.input`
  padding: 10px;
  width: 318px;
  border: none;
`;
export default Search;
export { Search };
