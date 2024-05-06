import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Artwork, visibility } from "../model/PostModel";
import { getArtwork, postArtwork } from "../api";
import { User } from "../model/userModel";
import { useAuth } from "./AuthContext";


// export {Typescript}
  interface ArtworkContextType {
    artwork: Artwork ;
    setArtwork: (value: Artwork) => void;
    findArtwork: (id: string) => Promise<Artwork | undefined>;
    uploadArtwork: (artwork: Artwork) => Promise<Artwork | undefined>;
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

    useEffect(() => {
      console.log("artwork: ", artwork);
    }, [artwork]);


    const uploadArtwork = useCallback(async (artwork: Artwork): Promise<Artwork | undefined> => {
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
  
    const value = useMemo(() => ({ artwork, setArtwork,findArtwork, uploadArtwork }), [artwork, setArtwork, findArtwork, uploadArtwork]);
  
    return (
      <ArtworkContext.Provider value={value}>
        {children}
      </ArtworkContext.Provider>
    );
  };
    