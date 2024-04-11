import { useState } from 'react';
import { Link } from 'react-router-dom';

export enum groupVisibility {
    PRIVATE = "private",
    PUBLIC = "public"
  }

export default function CreateGroupModal({
    closeModal,
  }: {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
    const [groupname, setGroupname] = useState("");
    const [userLimit, setUserLimit] = useState("10");
    const [visibility, setVisibility] = useState(false); // false = private, true = public
    const [maxUserLimit, setMaxUserLimit] = useState(10);


    const handleCreateClick =() => {
        const value = {
            group_name: {groupname},
            group_userlimit: {userLimit},
            group_visibility: {visibility}
        };
        console.log("save group");
        console.log(value);
        closeModal(false);
    };

    return(
        <div className='createGroupModal'>
            <div
            className="modalbackground"
            onClick={() => {
            closeModal(false);
            }}
            ></div>
            <div className='modalContainer'>
                <div className='modal'>
                    <div className='title'>
                        <h3>New Group</h3>
                        <div className="divider"></div>
                    </div>
                    <form>
                        <div className='groupname'>
                            <label htmlFor="groupname">Group name</label>
                            <input id='groupname' name="groupname"  value={groupname} onChange={(e) => setGroupname(e.target.value)} type="text" />
                        </div>
                        <div className='userlimit'>
                            <label htmlFor="userlimit">User limit</label>
                            <input type="range" name="userlimit" min="1" max={maxUserLimit} value={userLimit} onChange={(e) => setUserLimit(e.target.value)} id="userlimit"></input>
                            <span>{userLimit}</span>
                        </div>
                        <div className='visbility'>
                            <label htmlFor="visibility">Visibility</label>
                            <input id='visibility' name="visibility" type="checkbox" checked={visibility} onChange={(e) => setVisibility(e.target.checked)} />
                        </div>
                        <div className='buttons'>
                            <button onClick={() => {
                            closeModal(false);
                            }}>Cancel</button>
                            <button onClick={handleCreateClick}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}