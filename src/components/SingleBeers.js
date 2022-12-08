import React from 'react'
import { Card, Navbar } from '../components';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect} from "react";
import axios from "axios";
import { BsTrash, BsFillPencilFill } from 'react-icons/bs';
import styled from 'styled-components'
import { useBeers } from '../context';


function SingleBeers(props) {
  const [beer, setBeer] = useState({})
  let { id } = useParams();
  const { deleteBeer, listAllBeers } = useBeers();
  const navigate = useNavigate();
  
  
  async function getBeer() {
    try {
    const result = await axios.get(`http://localhost:8080/api/beers/${id}`)
    setBeer(result.data[0])
    } catch (err) {
    console.error(err.message);
    }
    
  }

  function handleClik(id) {
    deleteBeer(id)
    navigate('/all')
    listAllBeers()
  }

  useEffect(() => {
    getBeer()
    listAllBeers() 
    }, []);

  return (
    <Wrapper>
    <Navbar />
    <div>
      <h1>Single Beer</h1>
        
        <Card 
          key={beer.id} 
          id={beer.id}
          name={beer.name} 
          image={beer.image}
          note={beer.note}
        />
        <div className='options'>
          <BsTrash className='icon' onClick={() => handleClik(id) }/>
          <BsFillPencilFill className='icon' />
        </div>   
     
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.icon {
  cursor: pointer;
  font-size: 30px;
  border: groove;
  margin-right: 8px;
  margin-left: 8px;
}

.icon:hover {
  color: crimson;
}

.options {
  display: flex;
  justify-content: space-evenly;
}
`

export default SingleBeers