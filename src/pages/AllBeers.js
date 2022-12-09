import React, { useEffect } from 'react'
import { Card, Navbar, Search } from '../components';
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
      <Search />
      <div>
        <h1 className='title'>AllBeers</h1>
        {beers.map(beer => {
          
          return(    
            <div >
            <Card
            key={beer.id} 
            id={beer.id}
            name={beer.name} 
            image={beer.image}
            note={beer.note}
            />
          </div>
          )
        })}
      </div>
      <div className='search'>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
.beerCard:hover {
  transform: scale(1.05);
}

.search{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background: var(--clr-primary-400);
}
`

export default AllBeers