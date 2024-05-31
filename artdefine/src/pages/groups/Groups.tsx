import React, { useContext, useEffect, useState } from "react";
import CreateGroupModal from "../../components/group/Create-group-modal";
import GroupsTabs from "../../components/general/GroupTabs";
import GroupCard from "../../components/cards/GroupCard";
import { GroupsContext } from "../../context/GroupsContext";
import { useAuth } from "../../context/AuthContext";

export default function Groups() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [showMyGroups, setShowMyGroups] = useState<boolean>(true);
    const [showFindGroups, setShowFindGroups] = useState<boolean>(false);
    const { findUsersGroups, joinedGroups, findGroupsByName, foundGroups } = useContext(GroupsContext) || {};
    const {user} = useAuth();

    useEffect(() => {
            const fetchUserGroups = async () => {
                if (findUsersGroups && user) {
                    await findUsersGroups(user.id ?? ""); 
                }
            };
    
            fetchUserGroups();
    }, [ findUsersGroups, user]);

    const findByName = async (query: string) => {
        console.log(query);
        if (findGroupsByName) {
            console.log(await findGroupsByName(query ?? ''));
        }
    };


    const handleCreateClick = () => {
        setOpenModal(true);
    };
    
    const JoinedGroupList = joinedGroups !== undefined && joinedGroups.length !== 0 ? joinedGroups.map( group => <GroupCard group={group} key={group.id} />) : <div className="error-text">You haven't joined any groups yet</div>;
    const FoundGroupList = foundGroups !== undefined && foundGroups.length !== 0 ? foundGroups.map( group => <GroupCard group={group} key={group.id} />): <div className="error-text">No groups found</div>;
    return (
        <>
        {openModal && <CreateGroupModal closeModal={setOpenModal} />}
        <div className="max-size white-card">
            
            <GroupsTabs NameTab1="Joined Groups" NameTab2="Find Groups" ShowTab1={showMyGroups} setShowTab1={setShowMyGroups} ShowTab2={showFindGroups} setShowTab2={setShowFindGroups} / >
            
            
            {showMyGroups && 
            <>
            <div className="flex justify-spacebetween align-center search-section">
                <div className='SearchBar'>
                    <input className='search' type="text" placeholder='Search...' />
                    <i className="material-icons">search</i>
                </div>
                <i className="material-icons filter font">tune</i>
            </div>
            <div className="create-group-button flex align-center justify-center" onClick={() => handleCreateClick()}>
                    <div className="flex justify-center align-center font eaves book fs18 canary-dark">
                        <i className="material-icons filter">add</i>
                        <span> Create a group</span>
                    </div>
                </div>
            </>
                
            }
            

            {showMyGroups && 
                <div className="groups-list">
                    {JoinedGroupList}
                </div>
            }
            {showFindGroups && 
            <>
            <div className="flex justify-spacebetween align-center search-section">
                <div className='SearchBar'>
                    <input className='search' type="text" placeholder='Search...' onChange={e => findByName(e.target.value)} />
                    <i className="material-icons">search</i>
                </div>
                <i className="material-icons filter font">tune</i>
            </div>
            <div className="groups-list">
                    {FoundGroupList}
                </div>
            </>
                
            }
        </div>
        
        </>
        );
}