import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Artwork } from "../model/PostModel";
import { getArtwork } from "../api";
import { User } from "../model/userModel";


  interface ArtworkContextType {
    artwork: Artwork ;
    setArtwork: (value: Artwork) => void;
    findArtwork: (id: string) => Promise<Artwork | undefined>;
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
        post_content: "", 
        post_title: "",
        post_description: "",
        post_medium: "",
        user: {
          id: 0,
          user_name: "",
          user_subtitle: "",
          user_profile_picture: "",
          user_deactivated: false,
          user_deactivation_date: ""
        }, 
      }
    );

    useEffect(() => {
      console.log("artwork: ", artwork);
    }, [artwork]);
   
    const findArtwork = useCallback(async (id: string): Promise<Artwork | undefined> => {
      const fetchData = async (id:string) => {
        const data = await getArtwork(id);
        console.log(data);
        return data;
      };
      const response = await fetchData(id);
      return response;
    }, []);
  
    const value = useMemo(() => ({ artwork, setArtwork,findArtwork }), [artwork, setArtwork, findArtwork]);
  
    return (
      <ArtworkContext.Provider value={value}>
        {children}
      </ArtworkContext.Provider>
    );
  };
    