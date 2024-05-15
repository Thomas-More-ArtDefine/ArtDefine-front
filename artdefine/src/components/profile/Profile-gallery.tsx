import { Folder } from "../../model/FolderModel";
import Gallery from "../general/Gallery";

const ProfileGallery: React.FC<{ rank: number, folders?: Folder[] }> = ({ rank, folders }) => {
  
    return (
      <>
      {
        folders?
          <div className="profile-gallery">
            <Gallery folders={folders}/>
          </div>
          :
          "Folders couldn't be loaded."
      }
      </>
      
      
    );
  };
  
  export default ProfileGallery;
  