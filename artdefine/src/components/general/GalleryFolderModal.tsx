import { Folder } from "../../model/FolderModel";
import placeholder from "../../assets/images/mock-banner-pic.png";

const GalleryFolderModal: React.FC<{openMenu: React.Dispatch<React.SetStateAction<boolean>>, setFolder: React.Dispatch<React.SetStateAction<number>>, folders: Folder[]}> = ({ openMenu, setFolder, folders }) => {
    const foldercards = folders.map(folder =>{
        if (folder.posts !== undefined && folder.posts.length !== 0) {
            return <div onClick={() => {setFolder(folder.folder_order - 1); openMenu(false);}} key={folder.id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={folder.posts[0].post_content} alt="" />
                        <div>{folder.folder_name}</div>
                    </div>
        }else{
            return <div onClick={() => {setFolder(folder.folder_order - 1); openMenu(false);}} key={folder.id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={placeholder} alt="" />
                        <div>{folder.folder_name}</div>
                    </div>
            }
        }
    )
    
    
    return (
        <div className="folder-modal">  
        <div
        className="modalbackground"
        onClick={() => {
            openMenu(false);
        }}
      ></div>
            <div className="slideout-modal">
                <div className="header flex align-center justify-spacebetween"><span className="title">Folders</span><i className="material-icons clickable" onClick={() => console.log("open edit folder window")}>brush</i></div>
                <div className="content flex align-center direction-column">
                    {foldercards}
                </div>
            </div>
        </div>
    );
    }

export default GalleryFolderModal;