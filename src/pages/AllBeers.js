import React, { useEffect } from 'react'
import { Navbar, Search } from '../components';
import { useBeers } from '../context';
import styled from 'styled-components';




function AllBeers(props) {
  const { beers, listAllBeers } = useBeers();

  useEffect(() => {
    listAllBeers()
    
    
  }, [])
  
 
  return (
    <Wrapper>
      <Navbar />
      <div className='four'>
        <Search />
      </div> 
    </Wrapper>
  )
}
const Wrapper = styled.main`
.beerCard:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.beerCard {
  width: 90%;
}
.beercard-like {
  width: 90%;
}
`

export default AllBeers