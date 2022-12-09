import {  Link } from 'react-router-dom';
import styled from 'styled-components'
import { navLinks } from '../util/constants'


function MenuButton () {


  return (
    <Wrapper>
        {navLinks.map(link => { 
          return(
            <div key={link.id}>
              <div className="container-Home" >
                <Link to={link.url}>
                  <div className='div-transform'>
                    <div  className='card card-1' >
                      <h2> {link.text} </h2>
                        <img
                          className="add-beer"
                          src={link.img}
                          alt="Add"
                        />
                    </div>
                  </div>       
                </Link>
              </div>
            </div>
          )
        })}
    </Wrapper>
  )
}

const Wrapper = styled.main`


.container-Home {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30vh;
  align-items: center;
  perspective: 30rem;
  perspective-origin: 30% 60%;
  text-align: -webkit-center;
}

.div-transform {
  display: flex;
  align-items: center;
  transform: rotateX(10deg) rotateY(15deg) rotateZ(-9deg) scale3d(1, 1, -0.9)
    scale(1.1) translateX(50px);
}

.card {
  background: url("bgCardHome.jpg") center;
  color: #ffffff;
  border-radius: 8px;
  padding-top: 5px;
  width: 244px;
  transition: 0.5s ease;
  overflow: hidden;
  transform: translate(0);
  cursor: pointer;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.85;
}

.card h2 {
  text-transform: capitalize;
}

.card-1 {
  background-size: cover;
  transform: scale(1.02);
  margin-right: 40px;
}

.card-1:hover {
  transform: scale(1.11);
  box-shadow: -7px 4px 28px -3px #b527cf;
}

.card-1::before {
  background: linear-gradient(90deg, #ff9500 0%, #d5cb0f 100%);
}

`

export default MenuButton
