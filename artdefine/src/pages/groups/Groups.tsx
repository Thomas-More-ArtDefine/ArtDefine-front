import React, { useState } from "react";
import CreateGroupModal from "../../components/Create-group-modal";

export default function Groups() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleClick = () => {
        setOpenModal(true);
    };
    return (
        <div className="max-size">
            {openModal && <CreateGroupModal closeModal={setOpenModal} />}
            <div className='groupspage pagebody'>
                <button onClick={() => handleClick()}>Create Group</button>
            </div>
        </div>
        );
}