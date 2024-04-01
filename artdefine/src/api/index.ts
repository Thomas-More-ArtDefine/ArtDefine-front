import { testOutput } from "../model/testOutput";
import { userOutput } from "../model/userOutput";
import api from "./http-common";


export const getAll = () => {
    const data = {
        items: [
          {key:"asdf", text:"testje"},
          {key:"assdfdf", text:"wat een test"},
          {key:"assdsafasffdf", text:"een derdetest"}
        ]
      };
    return  data;
}

export const getAll2 = async (): Promise<testOutput[]> => {
  try {
    const response = await api.get('/users');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error while fetching all data:", error);
    throw error;
  }
}; 
        



export const getAllUsers = async (): Promise<userOutput[]> => {
  try {
    const response = await api.get('/users');
    console.log('fire in the hole')
    console.log('api response', response.data)
    
    return response.data;
  } catch (error) {
    console.error("Error while fetching all data:", error);
    throw error;
  }
};
      