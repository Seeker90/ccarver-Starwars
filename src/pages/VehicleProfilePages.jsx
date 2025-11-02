import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSingleVehicle } from "../lib/fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const VehicleProfilePage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();
  
  useEffect(() => {
    fetchSingleVehicle(uid, dispatch);
  }, [uid, dispatch]);
  
  return (
    <>
      <div className="container mt-5">
        {store.singleVehicle ? (
          <div className="row">
            <div className="col-md-6">
              <img 
                src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${uid}.jpg?raw=true`}
                className="img-fluid"
                alt={store.singleVehicle.name}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-4">{store.singleVehicle.name}</h1>
              <p className="lead mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <hr style={{ borderTop: '2px solid black', marginTop: '2rem', marginBottom: '2rem' }} />
              <div className="row text-center">
                <div className="col-4">
                  <h6>Name</h6>
                  <p>{store.singleVehicle.name}</p>
                </div>
                <div className="col-4">
                  <h6>Model</h6>
                  <p>{store.singleVehicle.model}</p>
                </div>
                <div className="col-4">
                  <h6>Vehicle Class</h6>
                  <p>{store.singleVehicle.vehicle_class}</p>
                </div>
              </div>
              
              <div className="row text-center mt-3">
                <div className="col-4">
                  <h6>Manufacturer</h6>
                  <p>{store.singleVehicle.manufacturer}</p>
                </div>
                <div className="col-4">
                  <h6>Length</h6>
                  <p>{store.singleVehicle.length}</p>
                </div>
                <div className="col-4">
                  <h6  >Passengers</h6>
                  <p  >{store.singleVehicle.passengers}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
}