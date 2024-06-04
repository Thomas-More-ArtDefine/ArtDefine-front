import { Folder } from "../../model/FolderModel";
import { GroupModel } from "../../model/GroupModel";
import { User } from "../../model/userModel";
import GroupCard from "../cards/GroupCard";
import profilePic from "../../assets/images/mock-profile-pic.png"
import { useNavigate, useParams } from "react-router-dom";
import { FeedbackItemModel } from "../../model/FeedbackItemModel";
import UserFeedbackCard from "../cards/UserFeedbackCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const ArtworkInfo: React.FC<{ title:string,user:User,description:string, folders:Folder[], tags: string, feedback?:FeedbackItemModel[]}> = ({title,user,description,folders, tags, feedback}) => {
    const navigate = useNavigate();
    const {findBasicUserById } = useContext(UserContext) || {};
    const groups:GroupModel[] = [];
    const { id } = useParams<{ id: string }>();
    folders.forEach((folder) =>{
        if (folder.group !== undefined && folder.group !== null) {
            groups.push(folder.group);
        }
    })
    const [respondants, setRespondants] = useState<User[]>([]);

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

   

    const findAllRespondants = async (feedback: FeedbackItemModel[]) => {
        const respondants: User[] = [];
        console.log(feedback);
        await Promise.all(
            feedback.map(async (feedbackItem) => {
                console.log(feedbackItem);
                const responses = feedbackItem.feedbackResponse;
                console.log(responses);
                await Promise.all(
                    responses.map(async (response) => {
                        console.log(response);
                        if (response.user_id) {
                            console.log(response.user_id);
                            const respondant = findBasicUserById && await findBasicUserById(response.user_id);
                            if (respondant && !respondants.some(res => res.id === respondant.id)) {
                                respondants.push(respondant);
                            }
                        }
                    })
                );
            })
        );
        console.log(respondants);
        setRespondants(respondants);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (feedback) {
                await findAllRespondants(feedback);
            }
        };
        fetchData();
    }, [feedback]);
      
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

            {feedback ?
                <div className="container">
                    <div className="title">Feedback</div>
                    {feedback && <button className="primary has-icon" onClick={() => navigate('/post/' + id + '/feedback')}>Give Feedback<i className="material-icons">reviews</i></button>}
                    <div>
                        {
                            respondants.map((respondant) => (
                                <UserFeedbackCard user={respondant} key={respondant.id} postId={id ?? 'NotFound'} />
                            ))
                        }
                    </div>
                </div> :
                ''
            }
            

        </>
    )
}


export default ArtworkInfo;