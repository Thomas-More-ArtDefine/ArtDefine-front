import { useState } from "react";
import { Folder } from "../../model/FolderModel";
import SimpleFolder from "./SimpleFolder";
import UnderlinedTitleSmall from "./UnderlinedTitledSmall";

const EditFolders: React.FC<{folders: Folder[], profile:boolean}> = ({folders, profile}) => {
    const defaultfolder:Folder = folders[0];
    const [newFolder, setNewFolder] = useState<boolean>(false);
    function compare(a:Folder,b:Folder) {
        if (a.folder_order < b.folder_order)
           return -1;
        if (a.folder_order > b.folder_order)
          return 1;
        return 0;
      }
    folders.sort(compare);

    const simplefolders = folders.map((folder)=>
        <SimpleFolder folder={folder} key={folder.id} defaultfolder={defaultfolder.id === folder.id} profile={profile} />
    )
    return (
        <>
        <div className="edit-folders">
            <UnderlinedTitleSmall title='Edit Folders'/>
            {simplefolders}
            {newFolder && <SimpleFolder  defaultfolder={true} profile={profile} setOpen={setNewFolder} />}
            <div className={newFolder?"add-button flex justify-center align-center font eaves book fs18 canary-dark":"hover clickable add-button flex justify-center align-center font eaves book fs18 canary-dark"} onClick={()=>{setNewFolder(true)}}>
                        <i className="material-icons filter">add</i>
                        <span> Add a folder</span>
                    </div>
        </div>
        </>
    );
    }

export default EditFolders;