import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { Artwork } from "../model/PostModel";


  interface ArtworkContextType {
    artwork: Artwork ;
    setArtwork: (value: Artwork) => void;
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
      { post_content: "", 
        post_title: "",
        user: { id: "" }, 
        folders: [
          { id: "" }
        ]
      });
  
   
  
    const value = useMemo(() => ({ artwork, setArtwork }), [artwork, setArtwork]);
  
    return (
      <ArtworkContext.Provider value={value}>
        {children}
      </ArtworkContext.Provider>
    );
  };
    