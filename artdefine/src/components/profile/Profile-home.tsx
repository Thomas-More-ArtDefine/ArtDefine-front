import { useNavigate } from "react-router-dom";
import { User } from "../../model/userModel";
import Card from "../cards/Card";
import TextCard from "../cards/TextCard";
import { useEffect } from "react";
import { Folder } from "../../model/FolderModel";
import placeholder from "../../assets/images/mock-banner-pic.png";

const ProfileHome: React.FC<{ rank: number, user?: User|null, handleCategoryButtonClick:any, folders:Folder[] }> = ({ rank, user, handleCategoryButtonClick, folders }) => {
    //TODO: one image from the folder as tumbnail

    function compare(a:Folder,b:Folder) {
        if (a.folder_order < b.folder_order)
           return -1;
        if (a.folder_order > b.folder_order)
          return 1;
        return 0;
      }

    useEffect(() => {
        if (folders) {
            folders.sort(compare);
        }
      }, []);
    

    const moreClickHandler = () => {
        handleCategoryButtonClick('gallery');
    }

    return (
        <>
        {user?
           <div className="profile-home">
                <TextCard title={user.user_name}  text={user.user_bio} subTitle={user.user_subtitle} links={user.links} pronouns={user.user_pronouns} isUser={true} creationDate={user.user_creationdate} />
                <Card
                    title={"Gallery"}
                    isUser={false}
                    cssProperty="gallery-tumbnail"
                    hasMore={true} 
                    moreClickHandler={moreClickHandler}
                    content={
                        <div className="flex justify-spacebetween">
                        {folders.length === 3?
                        <><div onClick={() => {console.log("navigate to gallery & select folder")}} key={folders[0].id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={folders[0].posts? folders[0].posts[0].post_content:placeholder} alt="" />
                        <div>{folders[0].folder_name}</div>
                        </div>
                        <div onClick={() => {console.log("navigate to gallery & select folder")}} key={folders[1].id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={folders[1].posts? folders[1].posts[0].post_content:placeholder} alt="" />
                        <div>{folders[1].folder_name}</div>
                        </div>
                        <div onClick={() => {console.log("navigate to gallery & select folder")}} key={folders[2].id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={folders[2].posts? folders[2].posts[0].post_content:placeholder} alt="" />
                        <div>{folders[2].folder_name}</div>
                        </div></>
                        :folders.length === 2?
                        <><div onClick={() => {console.log("navigate to gallery & select folder")}} key={folders[0].id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={folders[0].posts? folders[0].posts[0].post_content:placeholder} alt="" />
                        <div>{folders[0].folder_name}</div>
                        </div>
                        <div onClick={() => {console.log("navigate to gallery & select folder")}} key={folders[1].id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={folders[1].posts? folders[1].posts[0].post_content:placeholder} alt="" />
                        <div>{folders[1].folder_name}</div>
                        </div></>
                        :folders.length === 1?
                        <><div onClick={() => {console.log("navigate to gallery & select folder")}} key={folders[0].id} className="clickable foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src={folders[0].posts? folders[0].posts[0].post_content:placeholder} alt="" />
                        <div>{folders[0].folder_name}</div>
                        </div></>
                        :
                        "Folders couldn't be loaded"
                    }
                        
                        </div>
                        
                        
                    }
                />
                
            </div> 
            :
            ''
        }
        </>
        
      
    );
  };
  
  export default ProfileHome;
  