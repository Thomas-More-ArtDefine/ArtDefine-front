import React, { useContext, useEffect, useState } from "react";
import CreateGroupModal from "../../components/Create-group-modal";
import Tabs from "../../components/Tabs";
import GroupCard from "../../components/group/GroupCard";
import GROUPMOCK from "../../mock/GroupMock";
import { GroupsContext, useGroups } from "../../context/GroupsContext";
import { GroupModel } from "../../model/GroupModel";

export default function Groups() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [showMyGroups, setShowMyGroups] = useState<boolean>(true);
    const [showFindGroups, setShowFindGroups] = useState<boolean>(false);
    const { findUsersGroups, groups } = useContext(GroupsContext) || {};
    const id = '1';// temp id 1

    useEffect(() => {
        const fetchUserGroups = async () => {
          if (findUsersGroups) {
            await findUsersGroups(id ?? ""); 
          }
        };
    
        fetchUserGroups();
      }, [id, findUsersGroups]);

      const handleCreateClick = () => {
        setOpenModal(true);
    };
    
    const JoinedGroupList = groups !== undefined ? groups.map( group => <GroupCard group={group} key={group.id} />) : 'no groups - placeholder';
    
    //implement search feature
    const FoundGroupList = GROUPMOCK.map( group => <GroupCard group={group} key={group.id} />);
    return (
        <>
        {openModal && <CreateGroupModal closeModal={setOpenModal} />}
        <div className="max-size white-card">
            
            < Tabs NameTab1="Joined Groups" NameTab2="Find Groups" ShowTab1={showMyGroups} setShowTab1={setShowMyGroups} ShowTab2={showFindGroups} setShowTab2={setShowFindGroups} / >
            <div className="flex justify-spacebetween align-center search-section">
                <div className='SearchBar'>
                    <input className='search' type="text" placeholder='Search...' />
                    <i className="material-icons">search</i>
                </div>
                <i className="material-icons filter font">tune</i>
            </div>
            
            {showMyGroups && 
                <div className="create-group-button flex align-center justify-center" onClick={() => handleCreateClick()}>
                    <div className="flex justify-center align-center font eaves book fs18 canary-dark">
                        <i className="material-icons filter">add</i>
                        <span> Create a group</span>
                    </div>
                </div>
            }
            

            {showMyGroups && 
                <div className="groups-list">
                    {JoinedGroupList}
                </div>
            }
            {showFindGroups && 
                <div className="groups-list">
                    {FoundGroupList}
                </div>
            }
        </div>
        
        </>
        );
}