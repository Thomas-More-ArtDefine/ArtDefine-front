import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GroupBanner from "../../components/group/GroupBanner";
import GroupNav from "../../components/group/GroupNav";
import GroupHome from "../../components/group/GroupHome";
import Gallery from "../../components/general/Gallery";
import { GroupContext } from "../../context/GroupContext";
import placeholderBanner from "../../assets/images/mock-banner-pic.png"
import GroupDetails from "../../components/group/GroupDetails";
import { FolderContext } from "../../context/FolderContext";
import GroupMembers from "../../components/group/GroupMembers";
import { GroupJoin } from "../../components/group/Create-group-modal";
import { GroupsContext } from "../../context/GroupsContext";
import { useAuth } from "../../context/AuthContext";
import { GroupMember } from "../../model/GroupMember";

export default function Group() {

    const location = useLocation();
    const { id } = useParams<{ id: string }>();
    const state = location.state ? location.state.state : 'Home';
    const [currentStep, setCurrentStep] = useState(state);
    const { findGroup, group, joinGroup } = useContext(GroupContext) || {};
    const { findFoldersByGroupId, folders } = useContext(FolderContext) || {};
    const { findUsersGroups } = useContext(GroupsContext) || {};
    const {user} = useAuth();
    
    useEffect(() => {
        const fetchGroup = async () => {
          if (findGroup) {
            await findGroup(id ?? "");
          }
        };

        const fetchFolders = async () => {
            if (findFoldersByGroupId) {
              await findFoldersByGroupId(id ?? "");
            }
          };

          const fetchUserGroups = async () => {
            if (findUsersGroups && user) {
                await findUsersGroups(user.id ?? ""); 
            }
        };
        fetchUserGroups();
        fetchGroup();
        fetchFolders();
      }, [id, findGroup,findFoldersByGroupId, findUsersGroups, user]);

      const checkUserInGroup = (members: GroupMember[]) => {
        let joined: boolean = false;
        members.forEach((member)=>{
          if (member.member.id === user?.id) {
            joined = true;
          }
        })
        return joined;
      }

      const handleJoinClick = async () =>{
        if (group?.group_setting_join === GroupJoin.APPLY && joinGroup && user ) {
          console.log('handel apply click - create new group member for demo')
          await joinGroup(group, user);
          window.location.reload();
        }
        if (group?.group_setting_join === GroupJoin.OPEN && joinGroup && user) {
          await joinGroup(group, user);
          window.location.reload();
        }
      }

    return (
        <>
        {
            group ? 
            (
                <div className="page group-page">
                    <GroupBanner handleStepChange={setCurrentStep} name={group.group_name} bannerUrl={group.group_banner_picture !== '' ? group.group_banner_picture: placeholderBanner} alt={"Banner picture of the group."} />
                    <GroupNav handleStepChange={setCurrentStep} currentStep={currentStep}/>
                    <div className="content">
                    {currentStep === "Home" && <GroupHome group={group} membersClickHandler={()=>{setCurrentStep('Members')}}/>}
                    {currentStep === "Gallery" && <Gallery folders={folders? folders: group.folders}/>}
                    {/* {currentStep === "Chat" && <div>Chat</div>} */}
                    {currentStep === "Details" && <GroupDetails group={group}/>}
                    {currentStep === "Members" && <GroupMembers members={group.members} />}
                    
                    </div>
                    {
                      checkUserInGroup(group.members)?
                      ''
                       : group.group_setting_join === GroupJoin.INVITE?
                       ''
                       :
                       <button className="group-join-button clickable" onClick={() =>{handleJoinClick()}}>{group.group_setting_join === GroupJoin.APPLY? 'Apply': 'Join'}</button> 
                    }
                   
                </div>
            ) 
            : 
            (
                <div>loading...</div>
            )
        }
            

        </>
        
    )
}
