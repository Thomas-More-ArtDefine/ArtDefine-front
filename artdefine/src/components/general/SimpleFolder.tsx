import { useContext, useState } from "react";
import { Folder } from "../../model/FolderModel";
import { FolderContext } from "../../context/FolderContext";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { visibility } from "../../model/PostModel";

const SimpleFolder: React.FC<{folder?: Folder, defaultfolder: boolean, profile:boolean, setOpen?: React.Dispatch<React.SetStateAction<boolean>>}> = ({folder, defaultfolder,profile, setOpen}) => {
    const [edit, setEdit] = useState<boolean>(folder?false:true);
    const [folderName, setFolderName] = useState<string>(folder?folder.folder_name:'');
    const { findFoldersByUserId, findFoldersByGroupId, updateFolder, saveFolder, removeFolder } = useContext(FolderContext) || {};
    const { id } = useParams<{ id: string }>();
    const {user} = useAuth();
    
    const handleSaveFolder = async () => {
        if (folder && updateFolder) {
            await updateFolder(folder.id, {folder_name: folderName, id: folder.id, folder_order:0, folder_description: '', folder_archived: false, folder_visibility: visibility.PUBLIC});
            setEdit(false)
        }else if (setOpen && saveFolder && user) {
            if (folderName !== '') {
                await saveFolder({folder_name: folderName, id: "0", folder_order:0, folder_description: '', folder_archived: false, folder_visibility: visibility.PUBLIC}, profile, user, id)
            }
            
            setOpen(false);
        }
        setTimeout(() => {
            if (profile && id && findFoldersByUserId) {
                findFoldersByUserId(id);
            }else if (profile && user && findFoldersByUserId) {
                findFoldersByUserId(user.id);
            }else if(findFoldersByGroupId && id){
                findFoldersByGroupId(id);
            }else{
                console.log("Couldn't reload folders");
            }
        }, 250);
    }

    const handleDeleteFolder = async () => {
        if (folder && removeFolder) {
            await removeFolder(folder.id);
        }
        setTimeout(() => {
            if (profile && id && findFoldersByUserId) {
                findFoldersByUserId(id);
            }else if (profile && user && findFoldersByUserId) {
                findFoldersByUserId(user.id);
            }else if(findFoldersByGroupId && id){
                findFoldersByGroupId(id);
            }else{
                console.log("Couldn't reload folders");
            }
        }, 250);
    }

    
    return (
        <>
        
            <div className="simple-folder flex justify-spacebetween align-center">
               { !edit && <div>{folder?folder.folder_name:''}</div>}
               { edit && <input type="text" defaultValue={folder?folder.folder_name:''} onChange={(e)=>{setFolderName(e.target.value)}} onKeyDown={(e) =>e.key === 'Enter'? handleSaveFolder(): ''} />} 
                <div className="flex icons justify-spacebetween">
                    { !edit && <i className="material-icons clickable" onClick={() => setEdit(true)}>brush</i>}
                    { edit && <i className="material-icons clickable" onClick={() => handleSaveFolder()}>save</i>} 
                    <i className={defaultfolder?"material-icons disabled":"material-icons clickable"} onClick={() => defaultfolder?console.log("Folder can't be deleted" ):handleDeleteFolder()}>delete</i>
                </div>
               
            </div>

            
        </>
    );
    }

export default SimpleFolder;