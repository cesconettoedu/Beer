import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useBeers } from '../context';

function AddBeer() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const { listAllBeers } = useBeers();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      name,
      image,
      note
    }

    try {      
       axios.post(`http://localhost:8080/api/beers/add`, body)
        .then((response) => {
          alert("Contact Added")
          listAllBeers()
          navigate('/all')
         
        })
        } catch (err) {
          console.error(err.response);
        }    

  };
  
  return (
    <main>
    <Navbar/>
    <Wrapper>
    <h1>Add Beers</h1>
    <form className="beerCardFull" onSubmit={handleSubmit}>
        
            <div className="beerCard" >

              <div className="beercard-image">
              <input 
                type="text" 
                name='image'
                placeholder='Picture address' 
                onChange={(e) => setImage(e.target.value)}
                value={image || ""} 
              /> 
              </div>
                
              <div className="beercard-text" > 
                <div >
                <input 
                type="text" 
                name='name' 
                maxLength="50" 
                placeholder='Beer Name' 
                onChange={(e) => setName(e.target.value)}
                value={name || ""}
                required 
              />
                </div>
                <div >
                  <div className="comment">  <input 
                type="text" 
                name='note'
                maxLength="50" 
                placeholder='short comment' 
                onChange={(e) => setNote(e.target.value)}
                value={note || ""}  
              /></div>
                </div>
              </div>  
                  
              <div className="beercard-like" > 
                5 beers
              </div> 
            </div>
              <button className='include' type="submit">ADD</button>

        </form>      
      </Wrapper>
  </main>
  )
  }
          
const Wrapper = styled.section`
          
.beerCardFull {
  height: 42rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  overflow: hidden;
  justify-content: center
}

.beerCard {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 230px 150px 85px;
  grid-template-areas: "image" "text" "stats";
  
  
  border-radius: 18px;
  background: linear-gradient(90deg, #ff9500 0%, #d5cb0f 100%);

  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  text-align: center;
  border-radius: 10px;
  text-align-last: center;
  transition: 0.5s ease;
}

.icon:hover {
  color: crimson;
}

.beercard-image {
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  max-block-size: -webkit-fill-available; /* fit the image in the card */
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  place-content: center;
}

.beercard-text {
  grid-area: text;
  margin: 25px;
  word-wrap: break-word;
}

.beercard-like {
  display: flex;
  justify-content: space-around;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
 
  /* background-image: url("/public/beerBg.jpg"); */
  background: linear-gradient(90deg, #e6af49 0%, #d5cb0f 100%);
  align-items: center;
}

.mugs {
  max-inline-size: -webkit-fill-available;
}


.beercard-stats .border {
  border-left: 1px solid rgb(95, 95, 95);
  border-right: 1px solid rgb(95, 95, 95);
}

.beerCard:hover {
  box-shadow: 5px 5px 5px rgba(233, 233, 233, 0.6);
}

.include {
  margin-top: 2%;
  height: 10%;
  width: 10%;
  cursor: pointer;
}
          
`
 
  


export default AddBeer