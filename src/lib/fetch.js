
const baseURL = 'https://www.swapi.tech/api/';

export const fetchAllPeople = async(dispatch) => {
    try{
        const response = await fetch(`${baseURL}/people`)

        if(!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json();
        console.log(data.results);
        return data;
    }
    catch (error) {
        console.error("Error getting Star WArs people Profiles!", error)
    }


}
export const fetchAllPlanets = async() =>{

}
export const fetchAllVehicles = async() => {

}