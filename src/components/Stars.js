import styled from 'styled-components'
import mug from '../assets/beerIconBlack.png'


function Stars() {
  

  return (
    <Wrapper>
      <div className='mugs'>
        <img src={mug} className='mug' alt="glass" />
        <img src={mug} className='mug' alt="glass" />
        <img src={mug} className='mug' alt="glass" />
        <img src={mug} className='mug' alt="glass" />
        <img src={mug} className='mug' alt="glass" />
      </div>
    </Wrapper>

  )
}

const Wrapper = styled.main`
.mugs {
  display: flex;
  
}

.mug {
  width: 50px;
  height: 65px;
  cursor: pointer;
  margin: 1px 4px;
}
`
          
  export default Stars





  // if (x === '0') {
  //   return  <img className="mugs" src="/iconmug/00mugs.png" alt="List"/>
  // } 
  // if (x === '1') {
  //   return  <img className="mugs" src="/iconmug/01mugs.png" alt="List"/>
  // }
  // if (x === '2') {
  //   return  <img className="mugs" src="/iconmug/02mugs.png" alt="List"/>
  // }
  // if (x === '3') {
  //   return  <img className="mugs" src="/iconmug/03mugs.png" alt="List"/>
  // }
  // if (x === '4') {
  //   return  <img className="mugs" src="/iconmug/04mugs.png" alt="List"/>
  // }
  // if (x === '5') {
  //   return  <img className="mugs" src="/iconmug/05mugs.png" alt="List"/>
  // }