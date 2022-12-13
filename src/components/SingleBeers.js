import React from 'react'
import { Card, Navbar } from '../components';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect} from "react";
import { BsTrash, BsFillPencilFill } from 'react-icons/bs';
import styled from 'styled-components'
import { useBeers } from '../context';
import Form from './Form';


function SingleBeers(props) {
  
  let { id } = useParams();
  const { deleteBeer, listAllBeers, getBeer, beer } = useBeers();
  const navigate = useNavigate();
  const [editBreja, setEditBreja] = useState(false)
  
  
 
  function toggleDelete(id) {
    deleteBeer(id)
    listAllBeers()
    navigate('/all')
  }
  const toggleEdit = (id) => {
    setEditBreja(true);
    getBeer(id);
    
  };



  useEffect(() => {
    getBeer(id)
    listAllBeers() 
    }, []);

  return (
    <Wrapper>
    
    <Navbar />
    
    {!editBreja &&
     <>
     <h1 className='title'>Single Beer</h1>
        <Card 
          key={beer.id} 
          id={beer.id}
          name={beer.name} 
          image={beer.image}
          note={beer.note}
          star={beer.star}
        />
        <div className='options'>
          <BsTrash className='icon' onClick={() => toggleDelete(id) }/>
          <BsFillPencilFill className='icon'  onClick={() => toggleEdit(id) }/>
        </div>
      </>
    }
    {editBreja &&
        <>
          <h2 className='title'>Edit Beer:</h2>
          <Form edit={true} id={beer.id}/>
        </>
      }   
        
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