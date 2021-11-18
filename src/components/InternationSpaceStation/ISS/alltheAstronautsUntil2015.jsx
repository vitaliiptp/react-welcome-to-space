import React, { useState } from 'react';



function App() {

  // aca va my useState
  const [returnedData, setReturnedData] = useState (['JOOlaaaa, jola , jola jola']);


 
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
      return <li>{person.name} {person.nationality} {person.seccion} {person.mission_titel}</li>
    }))

  }

  // {peopleINSpace.map((gente) => {
  //   return <li>{gente.name} {gente.craft}</li>
  // })}

  //getData('/db');

  return (
    <div className="App">
      <button onClick={()=> getData('/astronauts')}> Haga click aca </button>
     {returnedData}
    </div>
  );
}

export default App;