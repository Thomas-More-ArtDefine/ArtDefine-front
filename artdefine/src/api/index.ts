import { testOutput } from "../model/testOutput";
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
    const response = await api.get('/all');
    return response.data;
  } catch (error) {
    console.error("Error while fetching all data:", error);
    throw error;
  }
}; 
        
      