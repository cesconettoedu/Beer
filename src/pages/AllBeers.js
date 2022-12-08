import React, { useEffect } from 'react'
import { Card, Navbar } from '../components';
import { useBeers } from '../context';




function AllBeers(props) {
  const { beers, listAllBeers } = useBeers();

  useEffect(() => {
    listAllBeers()
    
  }, [])
  
  
  
  return (
    <>
    <Navbar />
    <div>
      <h1>AllBeers</h1>
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
    </>
  )
}

export default AllBeers