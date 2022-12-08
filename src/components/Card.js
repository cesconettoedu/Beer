import React from 'react'
import styled from 'styled-components'


import { useNavigate } from "react-router-dom";



function Card({ id, name, image, note }) {
  
  const navigate = useNavigate();


  const btnSingleBeer = (id) => {
    navigate(`/beers/${id}`)
  }

  return (
    
      <Wrapper>
        <div className="beerCardFull" key={id} >
          <div className="beerCard" onClick={() => btnSingleBeer(id)}>

            <div className="beercard-image">
              <img
                className="beercard-image"
                src={image} 
                alt="beer foto"
                />  
            </div>
               
            <div className="beercard-text" > 
              <div >
                <h2 > {name}</h2>
              </div>
              <div >
                <div className="comment">{note}</div>
              </div>
            </div>  
                
            <div className="beercard-like" > 
              5 beers
            </div> 
          </div>
        </div>
       
      </Wrapper>
  )
  }
          
const Wrapper = styled.main`
          
.beerCardFull {
  height: 506px;
  display: flex;
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

  transition: 0.5s ease;
}

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

.beercard-image {
  grid-area: image;
  
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  max-block-size: -webkit-fill-available; /* fit the image in the card */
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: center

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
  transform: scale(1.05);
  box-shadow: 5px 5px 5px rgba(233, 233, 233, 0.6);
}

          
`
          
export default Card