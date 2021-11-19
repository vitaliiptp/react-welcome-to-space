import React, { useState } from 'react';
import { Button } from 'react-bootstrap'



function App() {

  // aca va my useState
  const [returnedData, setReturnedData] = useState ([]);


 
  //aca es donde voy a conectar mi data

  const getData = async (url) => {
    const newData = await fetch (url, {
      method: 'Get',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })

    .then(res => res.json());
    console.log('In getData()');
    console.log(newData);
    setReturnedData(newData.map((person) =>{
      return <li> Name: {person.name}, Nationality: {person.nationality}, Workin in Selection: {person.selection}, Mission Title: {person.mission_title}</li>
    }))

  }

  // {peopleINSpace.map((gente) => {
  //   return <li>{gente.name} {gente.craft}</li>
  // })}

  //getData('/db');

  return (
    <div className="astronauts" style={{color:'white', height:'100vh', width : '100vw', textDecoration:'none', display: 'flex', flexDirection: 'column', alignItems:'center', overflow:'scroll'}}>
      <Button variant="secondary" size="lg" onClick={()=> getData('/astronauts')}> Astronauts Here </Button>
     {returnedData}
    </div>
  );
}

export default App;