import { ChangeEvent, useState } from "react";
import UploadCard from "../UploadCard";
import { useArtwork } from "../../context/ArtworkContext";
import Artwork from "../Artwork";

const UploadItemForPost = ({

  isChanged,
  setIsChanged,
}: {

  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const { artwork,setArtwork } = useArtwork();
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

  return (
    <>
      {isChanged ? (
       <div>
       <Artwork src={src} />
     </div>
      ) : (
        
         <>
         <UploadCard onFileChange={handleFileChange} />
       </>
      )}

     
    </>
  );
};

export default UploadItemForPost;
