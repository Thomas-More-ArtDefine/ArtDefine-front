import { Folder } from "../../model/FolderModel";
import { useState } from "react";
import UnderlinedTitleSmall from "./UnderlinedTitledSmall";
import ArtworkCard from "../cards/Artwork-card";
import GalleryFolderModal from "./GalleryFolderModal";

const Gallery: React.FC<{folders: Folder[]}> = ({folders}) => {
    const [activeFolder, setActiveFolder] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    // sort folders on order
    function compare(a:Folder,b:Folder) {
        if (a.folder_order < b.folder_order)
           return -1;
        if (a.folder_order > b.folder_order)
          return 1;
        return 0;
      }
    folders.sort(compare);

    const works = folders[activeFolder].posts?.map(
      artwork =>
        <ArtworkCard 
                src={artwork.post_content} 
                title={artwork.post_title}
                creator={artwork.user.user_name}
                postid={artwork.id}
                key={artwork.id} />
    );

    setTimeout(() => {
      if (document.getElementsByClassName("no-posts")[0] !== undefined) {
          document.getElementsByClassName("no-posts")[0].innerHTML = "No posts could be loaded."
      }
  }, 3000);

    return (
        <>
        <div className="gallery">
        {openModal && <GalleryFolderModal folders={folders} setFolder={setActiveFolder} openMenu={setOpenModal} />}
              
          
            <UnderlinedTitleSmall icon={true} title={folders[activeFolder].folder_name} set={setOpenModal} />
            {/* <button className="flex justify-spacebetween align-center"><span>Submit</span><i className="material-icons">upload</i></button> */}
            {folders[activeFolder].folder_description !== '' ?
            (<div className="description detail-card">
            <div className="card-title">Description</div>
            <div className="content">{folders[activeFolder].folder_description}</div>
          </div>)
            :
            ('')
          }
            
                
                {
                  works?.length !== 0 && works ?
                  (works)
                  : works?.length !== 0 ?
                  (
                    <div className="no-posts-folder">No posts in this folder yet</div>
                  )
                  :
                  (
                    <div className="no-posts">Loading...</div>
                  )
                }
               
        </div>
        </>
    );
    }

export default Gallery;