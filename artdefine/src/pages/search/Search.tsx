import react, { useState } from "react";


export default function Search() {
    const [artActive, setArtActive] = useState<boolean>(true);
    const [groupActive, setGroupActive] = useState<boolean>(false);
    const [usersActive, setUsersActive] = useState<boolean>(false);

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

  return (
    <>
    <div className="search-page">
        <div className="flex justify-spacebetween align-center search-section">
            <div className='SearchBar'>
                <input className='search' type="text" placeholder='Search...' />
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

        
    </div>
        
    </>
  );
}
