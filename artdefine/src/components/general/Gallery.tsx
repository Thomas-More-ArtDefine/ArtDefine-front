import { useNavigate } from "react-router-dom";
import { Folder } from "../../model/FolderModel";
import { useState } from "react";
import UnderlinedTitleSmall from "./UnderlinedTitledSmall";
import ArtworkCard from "../Artwork-card";
import GalleryFolderModal from "./GalleryFolderModal";

const Gallery: React.FC<{folders: Folder[]}> = ({folders}) => {
    const navigate = useNavigate();
    const [activeFolder, setActiveFolder] = useState(0);
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

    return (
        <>
        <div className="gallery">
        {openModal && <GalleryFolderModal folders={folders} openMenu={setOpenModal} />}
              
          
            <UnderlinedTitleSmall icon={true} title={folders[activeFolder].folder_name} set={setOpenModal} />
            {/* <button className="flex justify-spacebetween align-center"><span>Submit</span><i className="material-icons">upload</i></button> */}
                {works}
        </div>
        </>
    );
    }

export default Gallery;