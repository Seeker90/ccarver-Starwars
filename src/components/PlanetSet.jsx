import { PlanetCard } from "./PlanetCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetSet = ({ allPlanets, dispatch }) => {
  const { store } = useGlobalReducer();

  return (
      <div 
        className="row d-flex flex-nowrap overflow-auto"
      >
        {allPlanets.map(planet => {
          return (
            <PlanetCard 
              key={planet.uid}
              uid={planet.uid}
              name={planet.name}
              population={planet.population}
              terrain={planet.terrain}
              dispatch={dispatch}
              isFavorited={store.favorites?.some(fav => fav.uid === planet.uid)}
            />
          )
        })}
      </div>
  );
}