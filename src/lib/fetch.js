const baseURL = 'https://www.swapi.tech/api/';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllPeople = async() => {
    try{
        const response = await fetch(`${baseURL}/people`)

        if(!response.ok) {
            throw new Error(`Failed to fetch people: ${response.status}`)
        }
        const data = await response.json();
        const peopleWithDetails = await Promise.all(
            data.results.map(async (person, index) => {
                await delay(index * 200); 
                const detailResponse = await fetch(`${baseURL}/people/${person.uid}`);
                
                if(!detailResponse.ok) {
                    throw new Error(`Failed to fetch details for ${person.uid}: ${detailResponse.status}`)
                }
                
                const detailData = await detailResponse.json();
                return {
                    uid: person.uid,
                    name: person.name,
                    ...detailData.result.properties
                };
            })
        );
        
        return peopleWithDetails;
    } catch(error) {
        console.error('Error fetching people:', error);
        throw error;
    }
}

export const fetchAllPlanets = async() => {
    try{
        await delay(1000); 
        const response = await fetch(`${baseURL}/planets`)

        if(!response.ok) {
            throw new Error(`Failed to fetch planets: ${response.status}`)
        }
        const data = await response.json();
        const planetsWithDetails = await Promise.all(
            data.results.map(async (planet, index) => {
                await delay(index * 200); 
                const detailResponse = await fetch(`${baseURL}/planets/${planet.uid}`);
                
                if(!detailResponse.ok) {
                    throw new Error(`Failed to fetch details for ${planet.uid}: ${detailResponse.status}`)
                }
                
                const detailData = await detailResponse.json();
                return {
                    uid: planet.uid,
                    name: planet.name,
                    ...detailData.result.properties
                };
            })
        );
        
        return planetsWithDetails;
    } catch(error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
}

export const fetchAllVehicles = async() => {
    try{
        await delay(2000); 
        const response = await fetch(`${baseURL}/vehicles`)

        if(!response.ok) {
            throw new Error(`Failed to fetch vehicles: ${response.status}`)
        }
        const data = await response.json();
        const vehiclesWithDetails = await Promise.all(
            data.results.map(async (vehicle, index) => {
                await delay(index * 200); 
                const detailResponse = await fetch(`${baseURL}/vehicles/${vehicle.uid}`);
                
                if(!detailResponse.ok) {
                    throw new Error(`Failed to fetch details for ${vehicle.uid}: ${detailResponse.status}`)
                }
                
                const detailData = await detailResponse.json();
                return {
                    uid: vehicle.uid,
                    name: vehicle.name,
                    ...detailData.result.properties
                };
            })
        );
        
        return vehiclesWithDetails;
    } catch(error) {
        console.error('Error fetching vehicles:', error);
        throw error;
    }
}

export const fetchSinglePerson = async(uid, dispatch) => {
  try {
    await delay(500); 
    const response = await fetch(`${baseURL}/people/${uid}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    dispatch({
      type: 'fetchedSinglePerson',
      payload: data.result.properties,
    })
    return data;
  }
  catch (error) {
    console.error("Error getting Star Wars person profile!", error)
  }
}

export const fetchSinglePlanet = async(uid, dispatch) => {
  try {
    await delay(500); 
    const response = await fetch(`${baseURL}/planets/${uid}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    dispatch({
      type: 'fetchedSinglePlanet',
      payload: data.result.properties,
    })
    return data;
  }
  catch (error) {
    console.error("Error getting Star Wars planet profile!", error)
  }
}

export const fetchSingleVehicle = async(uid, dispatch) => {
  try {
    await delay(500); 
    const response = await fetch(`${baseURL}/vehicles/${uid}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    dispatch({
      type: 'fetchedSingleVehicle',
      payload: data.result.properties,
    })
    return data;
  }
  catch (error) {
    console.error("Error getting Star Wars vehicle profile!", error)
  }
}