import { VehicleCard } from "./VehicleCard"
import useGlobalReducer from "../hooks/useGlobalReducer"

const style = {
  overflowX: "auto", 
  overflowY: "hidden", 
  flexWrap: "nowrap",
  whitespace: "nowrap", 
  verticalalign: "top",
}



export const VehicleSet = ({allVehicle,dispatch}) => {
    

    return(
        <>
        <div className="row flex" style = {style}>
            {
                 allVehicle.map(vehicle => {
                    return(
                        <VehicleCard
                        key={vehicle.uid}
                        uid={vehicle.uid}
                        name={vehicle.name}
                        dispatch={dispatch}
                        />
                    )
                })
            }
        </div>
        </>
    )
}