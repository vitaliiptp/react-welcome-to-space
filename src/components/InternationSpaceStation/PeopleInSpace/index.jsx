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
    <div className="people_in_space" style={{color:'white',}}> 

      
      {peopleINSpace.map((gente) => {
        return <li>{gente.name} {gente.craft}</li>
      })}
     
    </div>
  );
}

export default People;