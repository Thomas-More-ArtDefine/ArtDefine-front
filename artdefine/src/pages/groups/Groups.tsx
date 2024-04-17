import React, { useState } from "react";
import CreateGroupModal from "../../components/Create-group-modal";
import Tabs from "../../components/Tabs";

export default function Groups() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [showMyGroups, setShowMyGroups] = useState<boolean>(true);
    const [showFindGroups, setShowFindGroups] = useState<boolean>(false);
    const handleClick = () => {
        setOpenModal(true);
    };
    return (
        <div className="max-size white-card">
            {openModal && <CreateGroupModal closeModal={setOpenModal} />}
            {/* <div className='groupspage'>
                <button onClick={() => handleClick()}>Create Group</button>
            </div> */}
            < Tabs NameTab1="Joined Groups" NameTab2="Find Groups" ShowTab1={showMyGroups} setShowTab1={setShowMyGroups} ShowTab2={showFindGroups} setShowTab2={setShowFindGroups} / >
        </div>
        );
}