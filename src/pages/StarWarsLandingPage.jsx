import { useEffect } from "react";
import { CharacterSet } from "../components/CharacterSet";
import { VehicleSet } from "../components/VehicleSet.jsx";
import { PlanetSet } from "../components/PlanetSet.jsx";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../index.css"

export const StarWarsLandingPage = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchAllPeople()
            .then(data => dispatch({ type: 'fetchedAllPeople', payload: data }))
            .catch(error => console.error("Failed to fetch people:", error));
        
        fetchAllPlanets()
            .then(data => dispatch({ type: 'fetchedAllPlanets', payload: data }))
            .catch(error => console.error("Failed to fetch planets:", error));
        
        fetchAllVehicles()
            .then(data => dispatch({ type: 'fetchedAllVehicles', payload: data }))
            .catch(error => console.error("Failed to fetch vehicles:", error));
    }, [dispatch]);

    return (
        <div style={{
            background: 'url("https://i.pinimg.com/736x/f3/12/cd/f312cd79aac50b6f889eade3817c825a.jpg") center/cover fixed',
        }}>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="person-group mb-5">
                        <h1 className="text-info border-dark">Characters</h1>
                        <CharacterSet 
                            allPeople={store.allPeople}
                            dispatch={dispatch}
                        />
                    </div>
                    
                    <div className="planet-group mb-5">
                        <h1 className="text-info border-dark">Planets</h1>
                        <PlanetSet 
                            allPlanets={store.allPlanets}
                            dispatch={dispatch}
                        />
                    </div>
                    
                    <div className="vehicle-group mb-5">
                        <h1 className="text-info border-dark">Vehicles</h1>
                        <VehicleSet 
                            allVehicles={store.allVehicles}
                            dispatch={dispatch}
                        />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
};