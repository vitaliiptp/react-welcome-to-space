import React, { useState, useEffect } from "react";
import Axios from 'axios';

 

function People() {

  const [peopleINSpace, setPeopleInSpace] = useState([]);

  useEffect (() => {
    getPeopleSpace()
  }, [] )

  const getPeopleSpace = () => {
    Axios.get('http://api.open-notify.org/astros.json').then((response)=>{
     
    console.log(response)
      setPeopleInSpace( response.data.people )


    })
  }
  
  return (
    <div className="people_in_space" style={{color:'white', height:'100vh', width : '100vw', display: 'flex', flexDirection: 'column', alignItems:'center',}}> 

      
      {peopleINSpace.map((gente) => {
        return <li>{gente.name} {gente.craft}</li>
      })}
     
    </div>
  );
}

export default People;