import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const initialValue = {
  beers: [],
}


const BeerContext = createContext(initialValue)


export const ProvideBeerContext = ({children}) => {
  const context = useProvideBeerContext()
  return <BeerContext.Provider value={context} >{children} </BeerContext.Provider>
}

export const useBeers = () => useContext(BeerContext)


const useProvideBeerContext = () => {
  const [beers, setBeers] = useState([]);
  
  
  ///////////////////to get all beers
  async function listAllBeers() {
    try {
      const res = await axios.get(`http://localhost:8080/api/beers/all`);
      setBeers(res.data);
    
    } catch (err) {
      console.error(err.message);
    }
  }


  //////////////////te delete
  const deleteBeer = async (id) => {
    const choice = window.confirm("Are you sure you want to delete this BEER ?")
    if (choice) {
      await axios.delete(`http://localhost:8080/api/beers/${id}`, {
      });
    }
  }

  useEffect(() => {
    listAllBeers()
  }, []);
  
  
  ///////////////////










return { beers, listAllBeers, deleteBeer }

}