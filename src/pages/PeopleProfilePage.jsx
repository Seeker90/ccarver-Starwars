import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSinglePerson } from "../lib/fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PeopleProfilePage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();
  
  useEffect(() => {
    fetchSinglePerson(uid, dispatch);
  }, [uid, dispatch]);
  
  return (
    <>
      <div className="container mt-5">
        {store.singlePerson ? (
          <div className="row">
            <div className="col-md-6">
              <img 
                src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`}
                className="img-fluid"
                alt={store.singlePerson.name}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-4">{store.singlePerson.name}</h1>
              <p className="lead mt-3">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <hr style={{ borderTop: '2px solid black', marginTop: '2rem', marginBottom: '2rem' }} />
              
              <div className="row text-center">
                <div className="col-4">
                  <h6>Name</h6>
                  <p >{store.singlePerson.name}</p>
                </div>
                <div className="col-4">
                  <h6>Birth Year</h6>
                  <p>{store.singlePerson.birth_year}</p>
                </div>
                <div className="col-4">
                  <h6>Gender</h6>
                  <p>{store.singlePerson.gender}</p>
                </div>
              </div>
              
              <div className="row text-center mt-3">
                <div className="col-4">
                  <h6>Height</h6>
                  <p>{store.singlePerson.height}</p>
                </div>
                <div className="col-4">
                  <h6  >Skin Color</h6>
                  <p  >{store.singlePerson.skin_color}</p>
                </div>
                <div className="col-4">
                  <h6>Eye Color</h6>
                  <p>{store.singlePerson.eye_color}</p>
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