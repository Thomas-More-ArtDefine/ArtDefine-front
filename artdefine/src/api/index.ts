import { Artwork } from "../model/PostModel";
import { testOutput } from "../model/testOutput";
import { User } from "../model/userModel";
import api from "./http-common";
import POSTMOCK from "../mock/PostMock";
import FEEDMOCK from "../mock/FeedMock";


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
        



export const getAllUsers = async (): Promise<User[]> => {
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

export const getOne = async (id: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getArtwork = async (id: string): Promise<Artwork> => {
  try {
    //const response = await api.get(`/posts/${id}`);
    //return response.data;
    return POSTMOCK[0];
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getRandomFeed = async (exclude?: string[], amount?: number): Promise<Artwork[]> => {
  try {
    // let response;
    // if (exclude != undefined && amount != undefined) {
    //   response = await api.get(`/posts/feed/random?exclude=${exclude.toString()}&amount=${amount}`);
    // }else if (exclude != undefined) {
    //   response = await api.get(`/posts/feed/random?exclude=${exclude.toString()}`);
    // }else if (amount != undefined) {
    //   response = await api.get(`/posts/feed/random?amount=${amount}`);
    // }else{
    //   response = await api.get(`/posts/feed/random`);
    // }
    // return response.data;
    return FEEDMOCK;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};
      