import { Folder } from "../../model/FolderModel";
import Gallery from "../general/Gallery";

const ProfileGallery: React.FC<{ rank: number, folders?: Folder[], setstate: React.Dispatch<React.SetStateAction<string>> }> = ({ rank, folders, setstate }) => {
  
    return (
      <>
      {
        folders?
          <div className="profile-gallery">
            <Gallery folders={folders} setstate={setstate}/>
          </div>
          :
          "Folders couldn't be loaded."
      }
      </>
      
      
    );
  };
  
  export default ProfileGallery;
  