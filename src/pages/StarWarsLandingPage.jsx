// needs done:
// fetch SWAPI.tech
//useEffect
//fetch.js
//characterSet.jsx
//planetset.jsx
//vehicalset.jsx

import { useEffect } from "react";
import { CharacterSet } from "../components/CharacterSet";
import { VehicalSet } from "../components/VehiclesSet.jsx";
import { fetchAllPeople } from "../lib/fetch.js";
import { fetchAllPlanets } from "../lib/fetch.js";
import { fetchAllVehicles } from "../lib/fetch.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const StarWarsLandingPage = () => {
    const {store, dispatch} = useGlobalReducer();

    useEffect (() =>{
        // fetchAllPeople();
    })
    return(
        <>
       <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
            <div className="person-group">
                <h1>Characters</h1>
                <CharacterSet
                allPeople={store.allPeople}
                dispatch={dispatch}
                />
            </div>
            {/* <div className="planet-group">
                <h1>Planets</h1>
                <PlanetSet
                allPlanet={store.allplanet}
                dispatch={dispatch}
                />
            </div>
            <div className="vehicle-group">
                <h1>Vehicles</h1>
                <VehicalSet
                
                />
            </div> */}

        </div>
        <div className="col-1"></div>
       </div>
        </>
    )
};