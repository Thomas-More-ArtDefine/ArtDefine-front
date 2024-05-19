import { Folder } from "../../model/FolderModel";
import { GroupModel } from "../../model/GroupModel";
import { User } from "../../model/userModel";
import GroupCard from "../cards/GroupCard";
import profilePic from "../../assets/images/mock-profile-pic.png"
import { useNavigate, useParams } from "react-router-dom";

const ArtworkInfo: React.FC<{title:string,user:User,description:string, folders:Folder[], tags: string, feedback?:boolean}> = ({title,user,description,folders, tags, feedback}) => {
    const navigate = useNavigate();
    const groups:GroupModel[] = [];
    const { id } = useParams<{ id: string }>();
    folders.forEach((folder) =>{
        if (folder.group !== undefined && folder.group !== null) {
            groups.push(folder.group);
        }
    })

    let listedgroups: string[] = [];
    const groupMap = groups.map(group =>{
        if (listedgroups.includes(group.id)) {
            return '';
        }else{
            listedgroups.push(group.id);
        return <GroupCard group={group} key={group.id} />;
    }
    }
      );
      
    return (
        <>

            <h3 className="title">{title}</h3>
            <div className="user-card clickable" onClick={() => {navigate('/profile/'+user.id)}}>
                {user.user_profile_picture !== null && user.user_profile_picture !== undefined && user.user_profile_picture !== ''?
                (<img src={user.user_profile_picture} alt="profile picture of owner" />):
                (<img src={profilePic} alt="profile picture of owner" />)}
                
                <div className="username">{user.user_name}</div>
            </div>
            {description !== null && description !== undefined && description !== '' ? (<div className="item-description-container"><div>Description</div><div className="item-description">{description}</div></div>) : ('')}
            <div className="post-tags">{tags? tags: ''}</div>
            { groups && groups.length !== 0?
              <div className="container">
                <div className="title">Groups</div>
                <div>
                    {groupMap}
                </div>
            </div>  :
            ''
            }

            { feedback?
              <div className="container">
                <div className="title">Feedback</div>
                {feedback && <button className="primary has-icon" onClick={()=>navigate('/post/'+id+'/feedback')}>Give Feedback<i className="material-icons">reviews</i></button>} 
                <div>
                    
                </div>
            </div>  :
            ''
            }
            

        </>
    )
}


export default ArtworkInfo;