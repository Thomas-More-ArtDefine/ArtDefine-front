import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Artwork, visibility } from "../model/PostModel";
import { getArtwork, getBasicUserById, getPostsByName, getPostsByTag, postArtwork, postFeedbackResponse } from "../api";
import { User } from "../model/userModel";
import { useAuth } from "./AuthContext";
import { FeedbackResponse } from "../model/FeedbackResponseModel";



// export {Typescript}
  interface ArtworkContextType {
    artwork: Artwork ;
    artworks: Artwork[];
    setArtwork: (value: Artwork) => void;
    findArtwork: (id: string) => Promise<Artwork | undefined>;
    uploadArtwork: (artwork: Artwork) => Promise<Artwork | undefined>;
    findArtworkByTag: (tag: string, amount:number, skip:number) => Promise<Artwork[] | undefined>;
    findArtworkByTitle: (title: string) => Promise<Artwork[] | undefined>;
    uploadFeedbackResponse: (response: FeedbackResponse[]) => void;
  }
  
export const ArtworkContext = createContext<ArtworkContextType | null>(null);
  
export const useArtwork = () => {
    const context = useContext(ArtworkContext);
    if (context === null) {
      throw new Error('useArtwork must be used within an ArtworkProvider');
    }
    return context;
  };

export const ArtworkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  
  const [artwork, setArtwork] = useState<Artwork>(
      { 
        id: "0",
        user_id: "1",
        post_content: "", 
        post_title: "",
        post_description: "",
        post_medium: "",
        post_tags: '',
        post_visibility: visibility.PRIVATE,
        user: {
          id: "1",
          user_name: "",
          user_subtitle: "",
          user_bio: "",
          user_pronouns: '',
          user_banner_picture: '',
          user_profile_picture: "",
          user_deactivated: false,
          user_deactivation_date: "",
          user_creationdate: '',
          links:[],
          folders: []
        }, 
        folders: [
        ]
      }
    );

    const [artworks, setArtworks] = useState<Artwork[]>([]);

    useEffect(() => {
    }, [artwork]);


    const uploadArtwork = useCallback(async (artwork: Artwork): Promise<Artwork> => {
      try {
       
        console.log("Uploading artwork: ", artwork);
         const response = await postArtwork(artwork);
         console.log("Artwork uploaded: ", artwork);
         return response;
       
      } catch (error) {
        console.error("Error while uploading artwork:", error);
        throw error;
      }
    }, []);
   
    const findArtwork = useCallback(async (id: string): Promise<Artwork | undefined> => {
      const fetchData = async (id:string) => {
        const data = await getArtwork(id);
        console.log(data);
        return data;
      };
      const response = await fetchData(id);
      setArtwork(response);
      return response;
    }, []);

    const findArtworkByTitle = useCallback(async (name: string): Promise<Artwork[] | undefined> => {
      const fetchData = async (name:string) => {
        if (name) {
          const data = await getPostsByName(name, 10,0,'desc');
          console.log(data);
          return data[0];
        }else{
          return [];
        }
        
      };
      const response = await fetchData(name);
      setArtworks(response);
      return response;
    }, []);

    const findArtworkByTag = useCallback(async (tag: string, amount: number, skip: number): Promise<Artwork[] | undefined> => {
      const fetchData = async (str:string) => {
        const data = await getPostsByTag(str, amount, skip, 'desc');
        data.forEach(async (work) => { work.user = await getBasicUserById(work.user_id);});
        console.log(data);
        return data;
      };
      const response = await fetchData(tag);
      setArtworks(response);
      return response;
    }, []);

    const uploadFeedbackResponse = useCallback(async (response: FeedbackResponse[]) => {
      console.log("Uploading feedback response: ", response);
      response.forEach(async (res) => {
        const data = await postFeedbackResponse(res);
        console.log(data);

      });
    }, []);
  
    const value = useMemo(() => ({ artwork, artworks, setArtwork,findArtwork, uploadArtwork, findArtworkByTag, findArtworkByTitle, uploadFeedbackResponse }), [artwork, artworks, setArtwork, findArtwork, uploadArtwork, findArtworkByTag, findArtworkByTitle, uploadFeedbackResponse]);
  
    return (
      <ArtworkContext.Provider value={value}>
        {children}
      </ArtworkContext.Provider>
    );
  };
    