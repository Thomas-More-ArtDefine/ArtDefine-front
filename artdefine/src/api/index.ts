import { Artwork } from "../model/PostModel";
import { testOutput } from "../model/testOutput";
import { User } from "../model/userModel";
import api from "./http-common";
import POSTMOCK from "../mock/PostMock";
import FEEDMOCK from "../mock/FeedMock";
import { GroupModel } from "../model/GroupModel";
import { CreateGroupModel } from "../model/CreateGroupModel";
import { GroupJoin, groupVisibility } from "../components/Create-group-modal";

export enum orderBy {
  DESC = "DESC",
  ASC = "ASC"
}

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
    //TODO: Implement API call
    const response = await api.get(`/posts/${id}`); 
    // const response = await api.get(`/posts/1`);
    const userResponse = await api.get(`/users/${response.data.user_id}`);
    response.data.user = userResponse.data;
    console.log(response);
    return response.data;
    
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const postArtwork = async (artwork: Artwork): Promise<Artwork> => {
  try {
    const artworkForPost = {
      post_content: artwork.post_content,
      post_title: artwork.post_title,
      post_description: artwork.post_description,
      post_medium: artwork.post_medium,
      post_visibility: artwork.post_visibility,
      user_id: artwork.user.id,
      folders: [
        {
            "id": "3"
        }
    ]
    };
    const response = await api.post('/posts', artworkForPost);
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
}

export const getRandomFeed = async (exclude?: string[], amount?: number): Promise<Artwork[]> => {
  try {
    let response;
    if (exclude !== undefined && amount !== undefined) {
      response = await api.get(`/posts/feed/random?exclude=${exclude.toString()}&amount=${amount}`);
    }else if (exclude !== undefined) {
      response = await api.get(`/posts/feed/random?exclude=${exclude.toString()}`);
    }else if (amount !== undefined) {
      response = await api.get(`/posts/feed/random?amount=${amount}`);
    }else{
      response = await api.get(`/posts/feed/random`);
    }
    return response.data;
    //return FEEDMOCK;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByName = async (query:string, amount: number, skip: number, orderby: string): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }
  
  try {
    const response: any[] = await api.get(`/groups/search/name/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`);
    // response[0] = groups, response[1] = total count in database
    return response;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByJoinMethod = async (query:GroupJoin, amount: number, skip: number, orderby: string): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }
  
  try {
    const response: any[] = await api.get(`/groups/search/join/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`);
    // response[0] = groups, response[1] = total count in database
    return response;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByVisibility = async (query:groupVisibility, amount: number, skip: number, orderby: string): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }
  
  try {
    const response: any[] = await api.get(`/groups/search/visibility/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`);
    // response[0] = groups, response[1] = total count in database
    return response;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupById = async (id:string): Promise<GroupModel> => {
  try {
    const response= await api.get(`/groups/`+id);
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByUserId = async (id:string): Promise<GroupModel[]> => {
  try {
    const response = await api.get(`/users/`+id+'/groups');
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};


export const postGroup = async (group:CreateGroupModel, callback:Function): Promise<void|GroupModel> => {
  try {
    api.post('/groups', { 
            group_name: group.group_name,
            group_userlimit: group.group_userlimit,
            group_setting_visibility: group.group_setting_visibility,
            creator_id: group.creator_id,
            group_setting_join: group.group_setting_join,
     })
    .then(res => {
      // console.log(res);
      // console.log(res.data);
      callback(res.data)
    })
    
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};
      