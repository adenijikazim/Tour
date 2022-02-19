import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'




function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(false);

  const fetchTour = async() => {
    setLoading(true)

    try{
      const response = await fetch(url);
      const tours =  response.json();
      setLoading(false)
      setTours(tours)
      console.log(tours)}
      
    catch(error){}
    
  }

  useEffect(()=>{ 
    fetchTour();
  },[]);

  
  if(loading){
    return (
      <main> <Loading/> </main>
    )
  }


  return (
    <div>

      
    </div>
  )
}

export default App

