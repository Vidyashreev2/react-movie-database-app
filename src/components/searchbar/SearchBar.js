import React, { useEffect, useState, useRef } from 'react';
import { Wrapper, Content } from './SearchBar.style';
import searchImage from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {
  const [searchEle, setSearchEle] = useState('');
  const initial = useRef(true);

  useEffect(() => {

    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(searchEle);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, searchEle]);
  return (
    <Wrapper>
      <Content>
        <img src={searchImage} alt='search-icon' />
        <input type='text'
          placeholder='Search Movie'
          onChange={(event) => setSearchEle(event.currentTarget.value)}
          value={searchEle}
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar;