import { CharacterCard } from "./CharacterCard"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const CharacterSet = ({allPeople, dispatch}) => {  
    const { store } = useGlobalReducer();
    
    return(
        <div className="row d-flex flex-nowrap overflow-auto">
            {allPeople.map(person => {
                return(
                    <CharacterCard
                        key={person.uid}
                        uid={person.uid}
                        name={person.name}
                        gender={person.gender}
                        skin_color={person.skin_color}
                        hair_color={person.hair_color}
                        dispatch={dispatch}
                        isFavorited={store.favorites?.some(fav => fav.uid === person.uid)}
                    />
                )
            })}
        </div>
    )
}