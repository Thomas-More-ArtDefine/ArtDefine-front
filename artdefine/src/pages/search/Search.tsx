import react, { useCallback, useContext, useState } from "react";
import { ArtworkContext } from "../../context/ArtworkContext";
import ArtworkCard from "../../components/cards/Artwork-card";
import { UserContext } from "../../context/UserContext";
import { User } from "../../model/userModel";
import CriteriaComponent from "../../components/search/CriteriaComponent";


export default function Search() {
    const [artActive, setArtActive] = useState<boolean>(true);
    const [groupActive, setGroupActive] = useState<boolean>(false);
    const [usersActive, setUsersActive] = useState<boolean>(false);
    const { findArtworkByTag, artworks, findArtworkByTitle } = useContext(ArtworkContext) || {};
    const users: User[] = [];
    const [openFilter, setOpenFilter] = useState<boolean>(false);

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

    const handleInputChange = async (e: string) => {
        console.log(e);
        if (artActive && findArtworkByTitle && findArtworkByTag) {
           
            if (e[0] == "#" && e.length > 1) {
                console.log("=> tag: "+e.slice(1));
                if (findArtworkByTag) {
                    await findArtworkByTag(e.slice(1), 5, 0);
                }
            }else{
                console.log('api call post');
                await findArtworkByTitle(e);
            } 
        }
        if (groupActive) {
            console.log('api call group');
        }
        if (usersActive) {
            console.log('api call user');
        }
    }

    const works = artworks != undefined && artworks.length !== 0 ? artworks.map(
        artwork => {
            console.log(artwork);
                return <ArtworkCard 
                src={artwork.post_content} 
                title={artwork.post_title}
                creator={artwork.user.user_name}
                postid={artwork.id}
                key={artwork.id} />
                // return <></>;
        }
          
      ):
      (<></>);

    const openAndCloseSearchCriteria = useCallback(() => {
        setOpenFilter(!openFilter);
    }, [openFilter]);

  return (
    <>
    <div className="search-page">

        <div className="search-criteria" style={{display: openFilter ? "block" : "none"}}>
            <CriteriaComponent setClose={openAndCloseSearchCriteria} />
        </div>
        <div className="flex justify-spacebetween align-center search-section">
            <div className='SearchBar'>
                <input className='search' type="text" placeholder='Search...' onChange={(e) => handleInputChange(e.target.value)} />
                <i className="material-icons">search</i>
            </div>
            <div>
            <i className="material-icons filter font" onClick={openAndCloseSearchCriteria}>tune</i>
            </div>
           
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

            {artActive && works}
            {usersActive && works}
            {groupActive && works}
        {/* {
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
                } */}
    </div>
        
    </>
  );
}
