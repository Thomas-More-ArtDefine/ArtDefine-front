import React, { ChangeEvent, useState } from "react";
import UploadCard from "../UploadCard";
import { useArtwork } from "../../context/ArtworkContext";
import ArtworkContainer from "../artwork/Artwork";
import { ReactComponent as DeleteIcon } from "../../assets/vectors/delete-icon.svg";
import { Artwork } from "../../model/PostModel";

const UploadItemForPost: React.FC<{
  artwork: Artwork;
  setArtwork: (value: Artwork) => void;
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  artwork,
  setArtwork,
  isChanged,
  setIsChanged,
}) => {

  const [src, setSrc] = useState<string>(artwork.post_content);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setArtwork({...artwork, post_content: fileURL});
        setSrc(fileURL);
      setIsChanged(true);
      
    }
  };

  const handleDelete = () => {
    setArtwork({...artwork, post_content: ""});
    setSrc("");
    setIsChanged(false);
  }

  return (
    <>
      {isChanged ? (
       <div className="uploaded">
       <ArtworkContainer src={src} />
       <div><button onClick={handleDelete} className="delete has-icon">Delete {<DeleteIcon/>}</button></div>
     </div>
      ) : (
        
         <div className="not-uploaded">
         <UploadCard onFileChange={handleFileChange} />
       </div>
      )}

     
    </>
  );
};

export default UploadItemForPost;
