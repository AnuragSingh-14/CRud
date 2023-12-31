import axios from "axios";

const API_URL = "http://localhost:3002/users";

export const addUser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("error while calling api", error.message);
  }
};


export const getUserData = async ()=>{
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log('err while fetching data from server',error.message)
  }
}