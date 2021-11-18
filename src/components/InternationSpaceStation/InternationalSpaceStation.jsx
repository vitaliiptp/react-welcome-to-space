import React from 'react';
import { Link } from "react-router-dom";


const InternationalSpaceStation = () => {
    return (
        <div className="flex-container grid-container" style={{display:'flex', justifyContent:'space-around' }} >

                <div className="ISS__Button">
                    <Link to="/map" style={{ textDecoration: "none" }}>
                        <a className="large-button uppercase ff-serif text-dark bg-white">ISS</a>
                    </Link>
                </div>

                 <div className="People_InSpace">
                    <Link to="/people" style={{ textDecoration: "none" }}>
                        <a className="large-button uppercase ff-serif text-dark bg-white">How Many People Are In Space Right Now</a>
                    </Link>
                </div> 

                <div className="AllAstronauts">
                    <Link to="/astronauts" style={{ textDecoration: "none" }}>
                        <a className="large-button uppercase ff-serif text-dark bg-white">All Astronauts until 2015</a>
                    </Link>
                </div> 


        </div>
    );
};

export default InternationalSpaceStation;