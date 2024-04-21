import { Folder } from "../../model/FolderModel";
import { GroupModel } from "../../model/GroupModel";
import { User } from "../../model/userModel";
import GroupCard from "../group/GroupCard";
import profilePic from "../../assets/images/1profile-pic.png"

const ArtworkInfo: React.FC<{title:string,user:User,description:string, folders:Folder[]}> = ({title,user,description,folders}) => {
    
    const groups:GroupModel[] = [];
    folders.forEach((folder) =>{
        if (folder.group !== undefined && folder.group !== null) {
            groups.push(folder.group);
        }
    })

    const groupMap = groups.map(group =>
        <GroupCard group={group} key={group.id} />
      );
      
    return (
        <>

            <h3 className="title">{title}</h3>
            <div className="user-card"><img src={profilePic} alt="profile picture of owner" /><div className="username">{user.user_name}</div></div>
            <div className="item-description-container"><div>Description</div><div className="item-description">{description}</div></div>
            <div className="groups-container">
                <div className="title">Groups</div>
                <div>
                    {groupMap}
                </div>
            </div>

        </>
    )
}


export default ArtworkInfo;