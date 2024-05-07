import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Artwork, visibility } from "../model/PostModel";
import { getArtwork, getBasicUserById, getPostsByTag, postArtwork } from "../api";
import { User } from "../model/userModel";


// export {Typescript}
  interface ArtworkContextType {
    artwork: Artwork ;
    artworks: Artwork[];
    setArtwork: (value: Artwork) => void;
    findArtwork: (id: string) => Promise<Artwork | undefined>;
    uploadArtwork: (artwork: Artwork) => Promise<Artwork | undefined>;
    findArtworkByTag: (tag: string, amount:number, skip:number) => Promise<Artwork[] | undefined>;
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
        post_visibility: visibility.PRIVATE,
        user: {
          id: "1",
          user_name: "",
          user_subtitle: "",
          user_profile_picture: "",
          user_deactivated: false,
          user_deactivation_date: ""
        }, 
        folders: [
        ]
      }
    );

    const [artworks, setArtworks] = useState<Artwork[]>([]);

    useEffect(() => {
      console.log("artwork: ", artwork);
    }, [artwork]);


    const uploadArtwork = useCallback(async (artwork: Artwork): Promise<Artwork | undefined> => {
      try {
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
  
    const value = useMemo(() => ({ artwork, artworks, setArtwork,findArtwork, uploadArtwork, findArtworkByTag }), [artwork, artworks, setArtwork, findArtwork, uploadArtwork, findArtworkByTag]);
  
    return (
      <ArtworkContext.Provider value={value}>
        {children}
      </ArtworkContext.Provider>
    );
  };
    