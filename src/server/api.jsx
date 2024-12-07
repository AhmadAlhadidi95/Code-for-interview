import axios from "axios";

const API_URL = "http://127.0.0.1:3002/users";

export async function addUserFunc(data) {

    try {
        return await axios.post(API_URL, data);
    } catch (error) {
        console.log("Error while calling addUser api", error.message);
    }
    
};

export async function getUsersFunc() {

    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log("Error while calling getUsers api", error.message);
    }

    
};

export async function getUserByIdFunc(theId) {

    try {
        return await axios.get(`${API_URL}/${theId}`);
    } catch (error) {
        console.log("Error while calling getUserById api", error.message);
    }

    
};

export async function getEditUserByIdFunc(data, theId) {

    try {
        return await axios.put(`${API_URL}/${theId}`, data);
    } catch (error) {
        console.log("Error while calling getEditUserById api", error.message);
    }
    
};

export async function deleteUser(theId) {

    try {
        return await axios.delete(`${API_URL}/${theId}`);
    } catch (error) {
        console.log("Error while calling deleteUser api", error.message);
    }
    
};