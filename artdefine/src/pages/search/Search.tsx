import { useCallback, useContext, useState } from "react";
import { ArtworkContext } from "../../context/ArtworkContext";
import ArtworkCard from "../../components/cards/Artwork-card";
import { UserContext } from "../../context/UserContext";
import CriteriaComponent from "../../components/search/CriteriaComponent";
import SimpleUserCard from "../../components/cards/SimpleUserCard";
import { GroupsContext } from "../../context/GroupsContext";
import GroupCard from "../../components/cards/GroupCard";


export default function Search() {
    const [artActive, setArtActive] = useState<boolean>(true);
    const [groupActive, setGroupActive] = useState<boolean>(false);
    const [usersActive, setUsersActive] = useState<boolean>(false);
    const { findArtworkByTag, artworks, findArtworkByTitle } = useContext(ArtworkContext) || {};
    const { users, findUsersByUsername } = useContext(UserContext) || {};
    const { foundGroups, findGroupsByName } = useContext(GroupsContext) || {};
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [searchVal, setSearchVal] = useState<string>('');

    const handleCategoryButtonClick = async (button:string) => {
        if (findGroupsByName) {
            await findGroupsByName('');
        }
        if (findUsersByUsername) {
            await findUsersByUsername('');
        }
        if (findArtworkByTitle) {
            await findArtworkByTitle('');
        }
        switch (button) {
            case "art":
                setArtActive(true);
                setGroupActive(false);
                setUsersActive(false);
                setSearchVal('');
                break;
        
            case "groups":
                setArtActive(false);
                setGroupActive(true);
                setUsersActive(false);
                setSearchVal('');
                break;
            case "users":
                setArtActive(false);
                setGroupActive(false);
                setUsersActive(true);
                setSearchVal('');
                break;
            default:
                break;
        }
    };

    const handleInputChange = async (e: string) => {
        setSearchVal(e);
        if (artActive && findArtworkByTitle && findArtworkByTag) {
           
            if (e[0] === "#" && e.length > 1) {
                if (findArtworkByTag) {
                    await findArtworkByTag(e.slice(1), 5, 0);
                }
            }else{
                await findArtworkByTitle(e);
            } 
        }
        if (groupActive && findGroupsByName) {
            await findGroupsByName(e);
        }
        if (usersActive&& findUsersByUsername) {
            await findUsersByUsername(e);
        }
    }

    const works = artworks !== undefined && artworks.length !== 0 ? artworks.map(
        artwork => {
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

      const usercards = users !== undefined && users.length !== 0 ? users.map(
        user => {
                return <SimpleUserCard key={user.id} user={user}/>;
        }
          
      ):
      (<></>);

      const groupsCards = foundGroups !== undefined && foundGroups.length !== 0 ? foundGroups.map(
        group => {
                return <GroupCard key={group.id} group={group}/>;
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
                <input className='search' id="searchbar" type="text" placeholder='Search...' value={searchVal} onChange={(e) => handleInputChange(e.target.value)} />
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

            {artActive && (artworks?.length !== 0?works: <div className="error-text">Search to find posts.</div>)}
            {usersActive && (users?.length !== 0?usercards: <div className="error-text">Search to find users.</div>)}
            {groupActive && (foundGroups?.length !== 0? groupsCards: <div className="error-text">Search to find groups.</div>)}
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
