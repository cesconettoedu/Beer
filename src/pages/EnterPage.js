import Logo from "../components/Logo"
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function EnterPage() {

  return (
    <Wrapper>
      <div className="enter">
        <h1 className="myapp"> Ed's Beer List</h1>
          <Logo/>
        <div>
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

.myapp{
  padding: 67px;
  margin: 0;
}
`
export default EnterPage