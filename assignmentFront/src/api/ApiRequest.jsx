import axios from "axios";


//Owners API
export const fetchOwners = async () => {
    const response = await axios.get(`http://localhost:9191/owners`);
    return response.data;
    }

export const addOwner = async (data) => {
    const response = await axios.post(`http://localhost:9191/addUser`, data);
    return response.data;
    }

export const deleteOwner = async (id) => {
    const response = await axios.delete(`http://localhost:9191/deleteOwner/${id}`);
    return response.data;
    }

//Vehicles API
export const fetchVehicles = async () => {
    const response = await axios.get(`http://localhost:9191/vehicles`);
    return response.data;
    }

export const addVehicle = async (data) => {
    const response = await axios.post(`http://localhost:9191/addVehicle`, data);
    return response.data;
    }

export const deleteVehicle = async (id) => {
    const response = await axios.delete(`http://localhost:9191/deleteVehicle/${id}`);
    return response.data;
    }


//Claims API
export const fetchClaims = async () => {
    const response = await axios.get(`http://localhost:9191/claims`);
    return response.data;
    }

export const addClaim = async (data) => {
    const response = await axios.post(`http://localhost:9191/addClaim`, data);
    return response.data;
    }

export const deleteClaim = async (id) => {
    const response = await axios.delete(`http://localhost:9191/deleteClaim/${id}`);
    return response.data;
    }


