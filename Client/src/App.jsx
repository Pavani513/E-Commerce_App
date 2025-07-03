import React from "react";
import axios from "axios";



function App() {
 
  const products= async ()=>{
    try{
      const {data} = await axios.get('http://localhost:3000')
    }catch(error){
      console.log("error fetching data:", error)
    }
  }

  return (
    <>
      
    </>
  )
}

export default App;
