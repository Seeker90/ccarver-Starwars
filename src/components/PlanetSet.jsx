// import { PlanetCard } from "./PlanetCard"
// import useGlobalReducer from "../hooks/useGlobalReducer"

// const style = {
//   overflowX: "auto", 
//   overflowY: "hidden", 
//   flexWrap: "nowrap",
//   whitespace: "nowrap", 
//   verticalalign: "top",
// }



// export const PlanetSet = ({allPlanet,dispatch}) => {
    

//     return(
//         <>
//         <div className="row flex" style = {style}>
//             {
//                  allPlanet.map(planet => {
//                     return(
//                         <PlanetCard
//                         key={planet.uid}
//                         uid={planet.uid}
//                         name={planet.name}
//                         dispatch={dispatch}
//                         />
//                     )
//                 })
//             }
//         </div>
//         </>
//     )
// }