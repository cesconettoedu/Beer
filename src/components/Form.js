import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useBeers } from '../context';
import Stars from './Stars';

function Form(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");
  const [star, setStar] = useState("");
  const [editBreja, setEditBreja] = useState(props.edit)
  const { listAllBeers, getBeer, beer } = useBeers();
  
  const navigate = useNavigate();
  let beerId = useParams()
  const id = beerId.id 

  const handleCallback = (starChildren) => {
    setStar(starChildren);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      id,
      name,
      image,
      note,
      star
    }
    
    if(editBreja){
      try {
        axios.put(`http://localhost:8080/api/beers/${props.id}`,body
        )
          .then((res) => {
            getBeer(id)
            navigate('/all')
          })
      } catch (err) {
        console.error(err.message);
      }
    } else {

    try {    
      console.log(body);  
      axios.post(`http://localhost:8080/api/beers/add`, body)
       .then((response) => {
         alert("Beer Added")
         listAllBeers()
         navigate('/all')
        
       })
       } catch (err) {
         console.error(err.response);
       }
      }    
  }

    useEffect(() => {
  
      if (editBreja){
        getBeer(props.id)
        setImage(beer.image)
        setName(beer.name)
        setNote(beer.note)
       
        
      }
      }, []);
  

  return (
    
      <Wrapper>
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
            <Stars star={beer.star}
              formCallback={handleCallback}
            />
          </div> 
        </div>
          <button className='include' type="submit">Submit</button>

    </form>      
       
      </Wrapper>
  )
  }
          
const Wrapper = styled.main`
          
.beerCardFull {
  height: 36rem;
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
  width: 20%;
  cursor: pointer;
}
          
`
          
export default Form