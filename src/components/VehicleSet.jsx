import { VehicleCard } from "./VehicleCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const VehicleSet = ({ allVehicles, dispatch }) => {
  const { store } = useGlobalReducer();

  return (
  
      <div className="row d-flex flex-nowrap overflow-auto">
        {allVehicles.map(vehicle => {
          return (
            <VehicleCard 
              key={vehicle.uid}
              uid={vehicle.uid}
              name={vehicle.name}
              vehicle_class={vehicle.vehicle_class}
              length={vehicle.length}
              dispatch={dispatch}
              isFavorited={store.favorites?.some(fav => fav.uid === vehicle.uid)}
            />
          )
        })}
      </div>
  );
}