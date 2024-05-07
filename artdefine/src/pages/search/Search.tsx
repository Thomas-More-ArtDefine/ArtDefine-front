import react, { useContext, useState } from "react";
import { ArtworkContext } from "../../context/ArtworkContext";
import ArtworkCard from "../../components/cards/Artwork-card";


export default function Search() {
    const [artActive, setArtActive] = useState<boolean>(true);
    const [groupActive, setGroupActive] = useState<boolean>(false);
    const [usersActive, setUsersActive] = useState<boolean>(false);
    const { findArtworkByTag, artworks } = useContext(ArtworkContext) || {};
    

    const handleCategoryButtonClick = (button:string) => {
        switch (button) {
            case "art":
                setArtActive(true);
                setGroupActive(false);
                setUsersActive(false);
                break;
        
            case "groups":
                setArtActive(false);
                setGroupActive(true);
                setUsersActive(false);
                break;
            case "users":
                setArtActive(false);
                setGroupActive(false);
                setUsersActive(true);
                break;
            default:
                break;
        }
    };

    const handleInputChange = (e: string) => {
        console.log(e);
        if (e[0] == "#" && e.length > 1) {
            console.log("=> tag");
            if (findArtworkByTag) {
                findArtworkByTag(e.slice(1), 5, 0);
            }
        }else{
            console.log("=> no tag");
            //search by name
        }
    }

    const works = artworks != undefined && artworks.length !== 0 ? artworks.map(
        artwork =>
          <ArtworkCard 
                  src={artwork.post_content} 
                  title={artwork.post_title}
                //   creator={artwork.user.user_name}
                  creator="temp: fix in backend" // user info needed
                  postid={artwork.id}
                  key={artwork.id} />
      ):
      ("");

  return (
    <>
    <div className="search-page">
        <div className="flex justify-spacebetween align-center search-section">
            <div className='SearchBar'>
                <input className='search' type="text" placeholder='Search...' onChange={(e) => handleInputChange(e.target.value)} />
                <i className="material-icons">search</i>
            </div>
            <i className="material-icons filter font">tune</i>
        </div>

        <div className='feed-btns'>
                <div className='subnav-button'>
                    <button className={((artActive) ? "active": "")} onClick={() => handleCategoryButtonClick("art")}><i className="material-icons">brush</i></button>
                    <div className='button-text'>Art</div>
                </div>
                <div className='subnav-button'>
                    <button className={((groupActive) ? "active": "")} onClick={() => handleCategoryButtonClick("groups")}><i className="material-icons">group</i></button>
                    <div className='button-text'>Groups</div>
                </div>
                <div className='subnav-button'>
                    <button className={((usersActive) ? "active": "")} onClick={() => handleCategoryButtonClick("users")}><i className="material-icons">person</i></button>
                    <div className='button-text'>Users</div>
                </div>            
        </div>

        {
                  works?.length !== 0 && works ?
                  (works)
                  : works?.length !== 0 ?
                  (
                    <div className="no-posts-folder">No posts in this folder yet</div>
                  )
                  :
                  (
                    <div className="no-posts">Type something to search</div>
                  )
                }
    </div>
        
    </>
  );
}
