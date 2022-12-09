import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import useDebounce from '../hooks/useDebounce';
import axios from "axios";
import Card from "./Card"

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [getAll, setGetAll] = useState([]);
  const debouncedValue = useDebounce(inputSearch, 500);

  
  async function AllBeers(parameter) {
    try {
      const res = await axios.get(`http://localhost:8080/api/beers/all`);
      setGetAll(res.data);
      const filteredData = res.data.filter(app => app.name.includes(parameter))
      setSearchData(filteredData);
    } catch (err) {
      console.error(err.message);
    }
  }
  

  const handleChange = (event) => {
    setInputSearch(event.target.value.charAt(0).toUpperCase());
  };


  useEffect(() => {
    inputSearch === '' ? setSearchData([]) : AllBeers(inputSearch);
  }, [debouncedValue])


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

          })}
        <span>Search by name: </span>
        <input
          id="parameter"
          type="text"
          onChange={handleChange}
          placeholder="Beer name"
        ></input>

    </Wrapper>
  )
}
const Wrapper = styled.main`
input{
  height:31px;
  font-size: 11pt;
}
`
export default Search