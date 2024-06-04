import { Artwork } from "../model/PostModel";
import { testOutput } from "../model/testOutput";
import { User } from "../model/userModel";
import api from "./http-common";
import { GroupModel } from "../model/GroupModel";
import { CreateGroupModel } from "../model/CreateGroupModel";
import {
  GroupJoin,
  groupVisibility,
} from "../components/group/Create-group-modal";
import { FeedbackResponse } from "../model/FeedbackResponseModel";

export enum orderBy {
  DESC = "DESC",
  ASC = "ASC",
}

export const getAll = () => {
  const data = {
    items: [
      { key: "asdf", text: "testje" },
      { key: "assdfdf", text: "wat een test" },
      { key: "assdsafasffdf", text: "een derdetest" },
    ],
  };
  return data;
};

export const getAll2 = async (): Promise<testOutput[]> => {
  try {
    const response = await api.get("/users");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error while fetching all data:", error);
    throw error;
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get("/users");
    console.log("fire in the hole");
    console.log("api response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error while fetching all data:", error);
    throw error;
  }
};

export const getUserById = async (id: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getBasicUserById = async (id: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${id}/basic`);

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

    if (response.status !== 200) {
      return response.data;
    }

    const cleanArtwork: Artwork = {
      id: response.data.id,
      post_content: response.data.post_content,
      post_title: response.data.post_title,
      post_description: response.data.post_description,
      post_medium: response.data.post_medium,
      post_visibility: response.data.post_visibility,
      user: response.data.user,
      user_id: response.data.user_id,
      folders: response.data.folders,
      post_tags: response.data.post_tags,
      feedbackStack: response.data.feedback_template?.questions.map(
        (item: any) => {
          let question = {
            id: item.id,
            question: item.question_title,
            type: {
              type: item.question_type,
              title:
                item.question_type === "star_rating"
                  ? "Give a rating:"
                  : item.question_type === "bulletpoints"
                  ? "Select an option:"
                  : "Open title:",
                  content: item.content ? (item.question_type === 'bulletpoints' ? JSON.parse(item.content) : item.content) : null,
            },
            feedbackResponse: item.feedback_results?.map((feedback_result: any) => {
              let feedbackResponse = {
              id: feedback_result.id,
              feedback_result: feedback_result?.feedback_result || [],
              user_id: feedback_result?.user_id,
              question: null,
              question_id: feedback_result?.question_id,
            };
            return feedbackResponse;
            }),
          };
          return question;
        }
      ),
    };

    return cleanArtwork;
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
      user: {
        id: artwork.user.id,
      },
      folders: [],
    };
    const response = await api.post("/posts", artworkForPost);
    if (artwork.feedbackStack) {
      console.log("Feedbackstack:", artwork.feedbackStack);
      const feedbackTemplateForPost = {
        post_id: response.data.id,
        questions: artwork.feedbackStack.map((item) => {
          let question = {
            question_title: item.question,
            question_type: item.type.type,
            content: null as string | null,
          };
          console.log("item.type:", item.type);
          if ("content" in item.type) {
            question.content = JSON.stringify(item.type.content);
            console.log("Question", question);
          }

          return question;
        }),
      };
      await api.post(`/feedback-templates`, feedbackTemplateForPost);
    }

    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getRandomFeed = async (
  exclude?: string[],
  amount?: number
): Promise<Artwork[]> => {
  try {
    let response;
    if (exclude !== undefined && amount !== undefined) {
      response = await api.get(
        `/posts/feed/random?exclude=${exclude.toString()}&amount=${amount}`
      );
    } else if (exclude !== undefined) {
      response = await api.get(
        `/posts/feed/random?exclude=${exclude.toString()}`
      );
    } else if (amount !== undefined) {
      response = await api.get(`/posts/feed/random?amount=${amount}`);
    } else {
      response = await api.get(`/posts/feed/random`);
    }
    return response.data;
    //return FEEDMOCK;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByName = async (
  query: string,
  amount: number,
  skip: number,
  orderby: string
): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }

  try {
    const response = await api.get(
      `/groups/search/name/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`
    );
    // response[0] = groups, response[1] = total count in database
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByJoinMethod = async (
  query: GroupJoin,
  amount: number,
  skip: number,
  orderby: string
): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }

  try {
    const response: any[] = await api.get(
      `/groups/search/join/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`
    );
    // response[0] = groups, response[1] = total count in database
    return response;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByVisibility = async (
  query: groupVisibility,
  amount: number,
  skip: number,
  orderby: string
): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }

  try {
    const response: any[] = await api.get(
      `/groups/search/visibility/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`
    );
    // response[0] = groups, response[1] = total count in database
    return response;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupById = async (id: string): Promise<GroupModel> => {
  try {
    const response = await api.get(`/groups/` + id);
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getGroupsByUserId = async (id: string): Promise<GroupModel[]> => {
  try {
    const response = await api.get(`/users/` + id + "/groups");
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const postGroup = async (group: CreateGroupModel): Promise<any> => {
  try {
    const response = await api.post("/groups", {
      group_name: group.group_name,
      group_userlimit: group.group_userlimit,
      group_setting_visibility: group.group_setting_visibility,
      creator_id: group.creator_id,
      group_setting_join: group.group_setting_join,
    });
    // .then(res => {
    //   // console.log(res);
    //   // console.log(res.data);
    //   callback(res.data)
    // })
    return response;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};

export const getPostsByTag = async (
  query: string,
  amount: number,
  skip: number,
  orderby: string
): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }

  try {
    const response = await api.get(
      `/posts/tag/${query}?amount=${amount}&orderby=${filter}&skipAmount=${skip}`
    );
    console.log(response.data);
    return response.data[0];
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};

export const getFollowers = async (id: string): Promise<any[]> => {
  try {
    const response = await api.get(`/users/${id}/followers`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};

export const getFollowing = async (id: string): Promise<any[]> => {
  try {
    const response = await api.get(`/users/${id}/following`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};

export const getFoldersByGroupId = async (id: string): Promise<any[]> => {
  try {
    const response = await api.get(`/folders/group/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};

export const getFoldersByUserId = async (id: string): Promise<any[]> => {
  try {
    const response = await api.get(`/folders/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};

export const postFollowing = async (
  loggedUserId: string,
  followed: User[]
): Promise<any> => {
  try {
    const response = await api
      .patch("/users/follow/" + loggedUserId, { following: followed })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    return response;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};


export const postGroupMember = async (
  group: GroupModel,
  user: User
): Promise<any> => {
  try {
    const response = await api
      .post("/group-members", 
      {
        member: user,
        group: group,
        rank: null
      })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      });
    return response;
    }catch (error) {
      console.error("Error while fetching one data:", error);
      throw error;
    }
  };

export const getUsersByName = async (
  query: string,
  amount: number,
  skip: number,
  orderby: string
): Promise<any[]> => {
  let filter = orderBy.DESC;
  if (orderby.toUpperCase() === orderBy.ASC) {
    filter = orderBy.ASC;
  }

  try {
    const response = await api.get(
      `/users/search/username/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`
    );
    // response[0] = groups, response[1] = total count in database
    return response.data;
  } catch (error) {
    console.error("Error while fetching one data:", error);
    throw error;
  }
};


export const postFeedbackResponse = async (response: FeedbackResponse) => {
  console.log("Uploading feedback response...");
    console.log("Response:", response);
    try{
    await api.post(`/feedback-results`, response);
    console.log("Feedback response uploaded!");
    }catch(error){
      console.error("Error while uploading feedback response:", error);
      throw error;
    }
};
    export const getPostsByName = async (
      query: string,
      amount: number,
      skip: number,
      orderby: string
    ): Promise<any[]> => {
      let filter = orderBy.DESC;
      if (orderby.toUpperCase() === orderBy.ASC) {
        filter = orderBy.ASC;
      }
    
      try {
        const response = await api.get(
          `/posts/search/title/${query}?amount=${amount}&orderby=${filter}&skip=${skip}`
        );
        // response[0] = groups, response[1] = total count in database
        return response.data;
    
      } catch (error) {
        console.error("Error while fetching one data:", error);
        throw error;
      }
    };
    

    
