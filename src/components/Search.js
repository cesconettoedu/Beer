import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";
import Card from "./Card"


function Search() {
  const [searchData, setSearchData] = useState([]);
  const [getAll, setGetAll] = useState([]);

  
  async function AllBeers(parameter) {
    try {
      const res = await axios.get(`http://localhost:8080/api/beers/all`);
      setGetAll(res.data);
      setSearchData(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }
  

  const handleChange = (event) => {
    if(event.target.value === '') {
      setSearchData(getAll)
    } else {
      const filteredData = getAll.filter(app => app.name.toUpperCase().includes(event.target.value.toUpperCase()))
      setSearchData(filteredData);
    }
  };


  useEffect(() => {
    AllBeers('')

  }, [])


  return (
    <Wrapper>
        {searchData.length > 0 &&
          searchData.map((breja) => {
            return(
          <Card
            key={breja.id} 
            id={breja.id}
            name={breja.name} 
            image={breja.image}
            note={breja.note}
            />
          )
          })
        }

        <div className='search'>  
          <span>Search by name: </span>
          <input
            id="parameter"
            type="text"
            onChange={handleChange}
            placeholder="Beer name"
          ></input>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
input{
  height:31px;
  font-size: 11pt;
}
.search{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  z-index:99999;
  background: var(--clr-primary-400);
}
`
export default Search