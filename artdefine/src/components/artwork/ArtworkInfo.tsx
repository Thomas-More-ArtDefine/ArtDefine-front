import { User } from "../../model/userModel";


const ArtworkInfo = ({title,user,description}:{title:string,user:User,description:string}) => {

    return (
        <>
            <h3 className="title">{title}</h3>
            <div className="user-card"><img src={user.user_profile_picture} alt="profile picture of owner" /><div className="username">{user.user_name}</div></div>
            <div className="item-description-container"><div>Description</div><div className="item-description">{description}</div></div>
        </>
    )
}


export default ArtworkInfo;