import { Folder } from "../../model/FolderModel";
import EditFolders from "../general/EditFolders";

const ProfileEditFolders: React.FC<{folders: Folder[], setstate:  React.Dispatch<React.SetStateAction<string>> }> = ({ folders,setstate }) => {
  
    return (
      <>
      {
        folders?
          <div className="profile-gallery">
            <EditFolders folders={folders} profile={true}/>
          </div>
          :
          "Folders couldn't be loaded."
      }
      </>
      
      
    );
  };
  
  export default ProfileEditFolders;