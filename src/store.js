export const initialStore = () => {
  return {
    allPeople: [],
    singlePerson: null, 
    allPlanets: [],
    singlePlanet: null, 
    allVehicles: [],
    singleVehicle: null, 
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type) {
    case 'fetchedAllPeople':
      return {
        ...store,
        allPeople: action.payload,
      }
    case 'fetchedSinglePerson':
      return {
        ...store,
        singlePerson: action.payload
      }
    case 'fetchedAllPlanets':
      return {
        ...store,
        allPlanets: action.payload,
      }
    case 'fetchedSinglePlanet':
      return {
        ...store,
        singlePlanet: action.payload
      }
    case 'fetchedAllVehicles':
      return {
        ...store,
        allVehicles: action.payload,
      }
    case 'fetchedSingleVehicle':
      return {
        ...store,
        singleVehicle: action.payload
      }
    case 'favedProfile': {
      const { uid, name } = action.payload;
      const exists = store.favorites.some(profile => profile.uid === uid);
      
      return {
        ...store,
        favorites: exists 
          ? store.favorites.filter(fav => fav.uid !== uid)
          : [...store.favorites, { uid, name }]
      }
    }
    case 'clearFavorites':
      return {
        ...store,
        favorites: []
      }
    default:
      return store;
  }    
}