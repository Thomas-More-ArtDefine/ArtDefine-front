import React, { useState } from "react";
import { GroupModel } from "../../model/GroupModel";
import { useAuth } from "../../context/AuthContext";

interface Props {
  userGroups: GroupModel[];
}

const GroupsForPost: React.FC<Props> = ({ userGroups }) => {
  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);
  const {user} = useAuth();
  const handleFolderSelection = (folderId: string) => {
    if (selectedFolders.includes(folderId)) {
      document.getElementById('folder-'+folderId)!.innerHTML = 'check_box_outline_blank';
      setSelectedFolders(selectedFolders.filter((id) => id !== folderId));
      
    } else {
      document.getElementById('folder-'+folderId)!.innerHTML = 'check_box';
      setSelectedFolders([...selectedFolders, folderId]);
    }
  };

  const groupFolders =userGroups.map((group) => {
    return (
      <div key={group.id}>
        <div className="add-group-title">{group.group_name}</div>
        <div className="divider"></div>
        {group.folders.map((folder) => <div key={folder.id} className="simple-folder flex justify-spacebetween align-center">
          <div>{folder.folder_name}</div>
          <i className="material-icons icon-checkbox clickable" onClick={() => handleFolderSelection(folder.id)} id={"folder-"+folder.id}>check_box_outline_blank</i>
        </div>)}
      </div>
    );
  })
  return (
    <div className="groups-for-post">
        <div className="own-profile">
          <div className="add-group-title">My Profile</div>
          <div className="divider"></div>
          <div>
            {user?.folders.map((folder) =>
            <div className="simple-folder flex justify-spacebetween align-center">
              <div>{folder?folder.folder_name:''}</div>
              <i className="material-icons icon-checkbox checkbox-disabled">check_box</i>
            </div>
            )}
          </div>
      </div>
      {groupFolders}
      
    </div>
  );
};

export default GroupsForPost;
