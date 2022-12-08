import Logo from "../components/Logo"
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function EnterPage() {

  return (
    <Wrapper>
      <div className="enter">
        <div> Ed's Beer List</div>
        <div>
          <Logo/>
          <Link to="/home">
            <div className="btn">ENTER</div>
          </Link>
        </div>
      </div>
    </Wrapper>

  )
}


const Wrapper = styled.main`
.enter {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
`
export default EnterPage