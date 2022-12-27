import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { navLinks } from '../util/constants'
import logo from '../assets/eulogo.png'

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks])




  return (
    <Wrapper>
      <div className="nav-center ">
        <div className="nav-header"><Link to="/">
          <img src={logo} className='logo' alt="navigation logo" />
        </Link>
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {navLinks.map((link) => {
              const { id, url, text } = link;
              return <li key={id}>
                <Link to={url} className="link-padding">
                  {text}
                </Link>
              </li>
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.nav`

 .nav-center {
  background: var(--clr-primary-800);
  box-shadow: var(--shadow-1);
  font-family: 'Delight Coffee', sans-serif;
  margin-bottom: 10px;
  z-index: 1;
  position: fixed;
  width: 100%;
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
 
}

.nav-toggle {
  font-size: 1.5rem;
  color: var(--clr-white);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
}

.nav-toggle:hover {
  color: var(--clr-grey-800);
  transform: rotate(90deg);
}

.logo {
  height: 72px;
}

.links a {
  color: var(--clr-complement-1);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
   font-size: 1.5rem;
}

.links a:hover {
  background: var(--clr-grey-5);
  color: var(--clr-grey-9);
  padding-left: 1.5rem;
}

.link-padding{
  padding-right:2 rem;
}

.social-icons {
  display: none;
}

.social-icons:hover {
  color: var(--clr-grey-800);
}

.links-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  color: var(--clr-grey-800);
}

.show-container {
  height: 10rem;
}

@media screen and (min-width: 800px) {
  .nav-center {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .logo {
    height: 72px;
  }

  .nav-header {
    padding: 0;
  }

  .nav-toggle {
    display: none;
  }

  .links-container {
    height: auto !important;
  }

  .links {
    display: flex;
  }

  .links a {
    padding: 0;
    margin: 0 0.5rem;
  }

  .links a:hover {
    padding: 0;
    background: transparent;
  }

  .social-icons {
    display: flex;
  }

  .social-icons a {
    margin: 0 0.5rem;
    color: var(--clr-white);
    transition: var(--transition);
  }

  .social-icons a:hover {
    color: var(--clr-grey-7);
  }
}
`

export default Navbar