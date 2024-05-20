import { useContext, useEffect, useState } from "react";
import ProfileTabs from "./profile-tabs";
import { GroupsContext } from "../../context/GroupsContext";
import GroupCard from "../cards/GroupCard";
import { ProfileContext } from "../../context/ProfileContext";
import SimpleUserCard from "../cards/SimpleUserCard";
import { User } from "../../model/userModel";

const ProfileGroups: React.FC<{ rank: number, userid?:string, user?:User }> = ({ rank, userid, user }) => {
  const [showGroups, setShowGroups] = useState<boolean>(true);
  const [showFollowers, setShowFollowers] = useState<boolean>(false);
  const [showFollowing, setShowFollowing] = useState<boolean>(false);
  const { findUsersGroups, joinedGroups } = useContext(GroupsContext) || {};
  const { findFollowers, findFollowing, followers, following } = useContext(ProfileContext) || {};


  const handleTabClick = (str:string) =>{
    switch (str) {
      case "groups":
        setShowGroups(true);
        setShowFollowers(false);
        setShowFollowing(false);
        break;
    
      case "followers":
        setShowGroups(false);
        setShowFollowers(true);
        setShowFollowing(false);
        break;
      case "following":
        setShowGroups(false);
        setShowFollowers(false);
        setShowFollowing(true);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const fetchUserGroups = async () => {
        if (findUsersGroups && userid) {
            await findUsersGroups(userid ?? ""); 
        }
        if (findFollowers && userid) {
          console.log('get followers');
          await findFollowers(userid ?? ""); 
        }
        if (findFollowing && userid) {
          await findFollowing(userid ?? ""); 
        }
    };

    fetchUserGroups();
    console.log(followers);
    console.log(following);
}, [ findUsersGroups, findFollowers, findFollowing, userid]);

  const JoinedGroupList = joinedGroups !== undefined && joinedGroups.length !== 0 ? joinedGroups.map( group => <GroupCard group={group} key={group.id} />) : "You haven't joined any groups yet";
  const followersList = followers !== undefined && followers.length !== 0 ? followers.map( follower => <SimpleUserCard key={follower.id} user={follower}/>) : "No one had followed you yet";
  const followingList = following !== undefined && following.length !== 0 ? following.map( followed => <SimpleUserCard key={followed.id} user={followed}/>) : "You haven't followed anyone yet";
    return (
      <div className="profile-groups">
        <div className="max-size white-card">
          <ProfileTabs handleTabClick={handleTabClick} ShowTab1={showFollowers} ShowTab2={showFollowing} ShowTab3={showGroups} />
          {showFollowers && followersList}
          {showFollowing && followingList}
          {showGroups && JoinedGroupList}
        </div>
      </div>
    );
  };
  
  export default ProfileGroups;
  