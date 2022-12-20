import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Form from "./Form";

function AddBeer() {

    
  return (
    <main>
    <Navbar/>
    <Wrapper>
    <br/>
    <h1 className='title'>Add Beers</h1>
    <br/>
    <Form edit={false}
    />
    </Wrapper>
  </main>
  )
  }
          
const Wrapper = styled.section`
                    
`
 
  


export default AddBeer